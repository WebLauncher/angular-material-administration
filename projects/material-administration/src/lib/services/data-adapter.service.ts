import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataAdapterInterface } from './data-adapter';
import { of, from } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { uuidv4 } from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService implements DataAdapterInterface {
  currentTask: AngularFireUploadTask;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  get(collection: string, id: string) {
    return this.db.collection(collection).doc(id).valueChanges();
  }

  list(collection: string, idField: string) {
    return this.db.collection(collection).valueChanges({idField});
  }

  add(collection: string, item: any) {
    return from(this.db.collection(collection).add(item));
  }

  update(collection: string, id: string, item: any) {
    return from(this.db.collection(collection).doc(id).update(item));
  }

  delete(collection: string, id: string) {
    return from(this.db.collection(collection).doc(id).delete());
  }

  upload(file: File) {
    const filePath = uuidv4() + '_' + file.name;
    this.currentTask = this.storage.upload(filePath, file);

    return this.currentTask.snapshotChanges();
  }

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
