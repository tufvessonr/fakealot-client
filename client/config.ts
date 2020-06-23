const ENV = new (class {
  public readonly APP_HOSTNAME = 'localhost';
  public readonly PORT = '3000';

  public readonly API_SERVER = 'http://localhost:4000/graphql';

  public readonly NODE_ENV = 'development';

  constructor() {
    const keys = Object.keys(this);
    const missing: string[] = [];
    for (const k of keys) {
      console.log(k, process.env[k]);

      const v = process.env[k] || (this as any)[k];
      if (!v) {
        missing.push(k);
      } else {
        (this as any)[k] = v;
      }
    }
    if (missing.length > 0 && process.env.NODE_ENV !== 'test') {
      throw new Error(
        `Required environment variables missing: ['${missing.join("','")}']`
      );
    }
  }
})();

const CONFIG = new (class {
  public readonly APP_NAME = 'fakealot-client';
  public readonly APP_HOSTNAME = ENV.APP_HOSTNAME;
  public readonly PORT: number = parseInt(ENV.PORT, 10);

  public readonly API_SERVER = ENV.API_SERVER;

  readonly NODE_ENV = ENV.NODE_ENV;

  get isDevelopment() {
    return ['development', 'test'].includes(this.NODE_ENV);
  }

  get isProduction() {
    return ['production'].includes(this.NODE_ENV);
  }
})();

export default CONFIG;
