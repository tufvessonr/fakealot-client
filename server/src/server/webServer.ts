import { fromCallback } from 'bluebird';
const destroyer = require('destroyer') as any;
import http, { Server } from 'http';
import { ListenOptions } from 'net';

const DEFAULT_TIMEOUT = 15; // seconds

export class WebServer {
  constructor(appCallback: any) {
    this.server = http.createServer(appCallback);
    this.destroy = destroyer(this.server);
  }

  server: Server;
  destroy: () => void;

  async listen(options: ListenOptions): Promise<void> {
    await fromCallback((cb) => this.server.listen(options));
  }

  async shutdown(
    { timeout }: { timeout: number } = { timeout: DEFAULT_TIMEOUT }
  ): Promise<void> {
    if (!this.server.listening) {
      console.warn('Shutdown requested, but server not listening.');
      return;
    }

    const conns = (await fromCallback((cb) =>
      this.server.getConnections(cb)
    )) as number;

    if (conns > 0) {
      console.log(
        `Waiting up to ${timeout}s for ${conns} connections to close...`
      );
    }

    await new Promise((resolve) => {
      const timeoutHandle = setTimeout(() => {
        console.warn(`Timeout waiting for connections to close, forcing...`);
        this.destroy();
      }, timeout * 1000);

      timeoutHandle.unref();

      this.server.once('close', () => {
        clearTimeout(timeoutHandle);
        resolve();
      });

      this.server.close();
    });
  }
}
