import CONFIG from '../config';
import { Storage, GetSignedUrlConfig } from '@google-cloud/storage';
import path from 'path';

const firebase = CONFIG.firebaseConfig;
export const firebaseStorage = new Storage({
  projectId: firebase.project_id,
  keyFilename: path.join(__dirname, '../firebase/firebaseConfig.js'),
});

export const firebaseBucket = firebaseStorage.bucket(
  CONFIG.FIREBASE_STORAGE_BUCKET
);

export interface ISignedUrlData {
  url: string;
  expires: Date;
}

export class FirebaseEngine {
  createProduct() {}
  updateProduct() {}
  deleteProduct() {}

  static async generateSignedUrl(
    bucketName: string,
    filename: string
  ): Promise<ISignedUrlData> {
    const expires = Date.now() + 1000 * 60 * 60 * 24 * 7;
    const options: GetSignedUrlConfig = {
      version: 'v2',
      action: 'read',
      expires,
    };

    const [url] = await firebaseStorage
      .bucket(bucketName)
      .file(filename)
      .getSignedUrl(options);

    return {
      url,
      expires: new Date(expires),
    };
  }
}
