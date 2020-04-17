import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataAdapterInterface } from './data-adapter';
import { of, from } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService implements DataAdapterInterface {

  constructor(
    private db: AngularFirestore
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
    return of(true);
  }

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
