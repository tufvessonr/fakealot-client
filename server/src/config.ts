import dotenv from 'dotenv';

dotenv.config();

const ENV = new (class {
  public readonly PUBLIC_HOSTNAME = 'localhost';
  public readonly PORT = '4000';

  public readonly FIREBASE_TYPE = '';
  public readonly FIREBASE_PROJECT_ID = '';
  public readonly FIREBASE_PRIVATE_KEY_ID = '';
  public readonly FIREBASE_PRIVATE_KEY = '';
  public readonly FIREBASE_CLIENT_EMAIL = '';
  public readonly FIREBASE_CLIENT_ID = '';
  public readonly FIREBASE_AUTH_URI = '';
  public readonly FIREBASE_TOKEN_URI = '';
  public readonly FIREBASE_AUTH_PROVIDER_X509_CERT_URL = '';
  public readonly FIREBASE_CLIENT_X509_CERT_URL = '';

  public readonly FIREBASE_STORAGE_BUCKET = '';

  public readonly NODE_ENV = 'development';

  constructor() {
    const keys = Object.keys(this);
    const missing: string[] = [];
    for (const k of keys) {
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
  public readonly APP_NAME = 'fakealot-api';
  public readonly PORT: number = parseInt(ENV.PORT, 10);

  public readonly FIREBASE_STORAGE_BUCKET = ENV.FIREBASE_STORAGE_BUCKET;

  readonly NODE_ENV = ENV.NODE_ENV;

  get isDevelopment() {
    return ['development', 'test'].includes(this.NODE_ENV);
  }

  get isProduction() {
    return ['production'].includes(this.NODE_ENV);
  }

  get firebaseConfig() {
    return {
      type: ENV.FIREBASE_TYPE,
      project_id: ENV.FIREBASE_PROJECT_ID,
      private_key_id: ENV.FIREBASE_PRIVATE_KEY_ID,
      private_key: ENV.FIREBASE_PRIVATE_KEY,
      client_email: ENV.FIREBASE_CLIENT_EMAIL,
      client_id: ENV.FIREBASE_CLIENT_ID,
      auth_uri: ENV.FIREBASE_AUTH_URI,
      token_uri: ENV.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: ENV.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: ENV.FIREBASE_CLIENT_X509_CERT_URL,
    };
  }
})();

export default CONFIG;
