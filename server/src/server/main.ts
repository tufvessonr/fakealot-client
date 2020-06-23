interface IAvailableHelpers {
  abort: typeof abort;
}

function abort(exitCode: number = 1): never {
  throw new StopError(exitCode);
}

export default async function main(
  app: AppFunction,
  cleanup?: CleanupFunction
): Promise<void> {
  const helpers = {
    abort,
  };

  try {
    if (cleanup) {
      const cleanupHandler = cleanupWrapper.bind(null, cleanup, helpers);

      process.on('SIGINT', cleanupHandler);
      process.on('SIGTERM', cleanupHandler);
    }

    await app(helpers);
  } catch (e) {
    let exitCode = 1;
    if (e instanceof StopError) {
      exitCode = e.exitCode;
    } else {
      console.error('Error during main:', e.stack || e.message);
    }

    if (cleanup) {
      try {
        await cleanup({ signal: '', ...helpers });
      } catch (e) {
        console.error('Error during cleanup:', e.stack || e.message);
      }
    }
    setTimeout(() => {
      console.log('Main: Force exiting...');
      process.exit(exitCode);
    }, 500);
  }
}

type CleanupArgs = IAvailableHelpers & {
  signal: string;
};

type AppFunction = (helpers: IAvailableHelpers) => Promise<void>;
type CleanupFunction = (helpers: CleanupArgs) => Promise<void>;

class StopError extends Error {
  constructor(readonly exitCode: number) {
    super('');
  }
}

let cleanupInProgress = false;
async function cleanupWrapper(
  cleanupFn: CleanupFunction,
  helpers: IAvailableHelpers,
  signal: string
) {
  if (cleanupInProgress) {
    return;
  }
  cleanupInProgress = true;

  await cleanupFn({ signal, ...helpers });
}
