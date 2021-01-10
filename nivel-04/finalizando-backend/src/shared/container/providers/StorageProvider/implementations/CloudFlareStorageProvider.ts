import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import firebaseConfig from '@config/firebase';
import * as firebase from 'firebase';
import { AnySchema } from '@hapi/joi';
import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  private client: firebase.default.app.App;

  constructor() {
    this.client = firebase.default.initializeApp(firebaseConfig);
  }

  public async saveFile(file: string) {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);
    const storage = this.client.storage();
    const storageRef = storage.ref();
    const avatarRef = storageRef.child(path.basename(file));
    const avatarImagesRef = storageRef.child(path.basename(file));

    storageRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });

    const fileContent = fs.promises.readFile(originalPath, {
      encoding: 'utf-8',
    });

    avatarRef.
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
