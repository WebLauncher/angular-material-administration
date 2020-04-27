import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataAdapterInterface } from './data-adapter';
import { from, Subject } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import { map, finalize, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService implements DataAdapterInterface {
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  get(collection: string, id: string) {
    return this.db.collection(collection).doc(id).valueChanges();
  }

  list(collection: string, idField: string) {
    return this.db.collection(collection).valueChanges({ idField });
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
    const filePath = uuidv4() + '_' + file?.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    const downloadUrl$ = new Subject<string>();

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadUrl => {
          downloadUrl$.next(downloadUrl);
          downloadUrl$.complete();
        });
      })
    ).subscribe();

    return downloadUrl$.pipe(filter(Boolean));
  }

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
