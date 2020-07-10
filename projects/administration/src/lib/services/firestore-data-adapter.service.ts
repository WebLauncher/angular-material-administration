import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Subject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import { finalize, filter } from 'rxjs/operators';
import { DataAdapterInterface, DownloadData } from '../types/data-adapter';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataAdapterService implements DataAdapterInterface {
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

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

  upload(file: File): Observable<DownloadData> {
    const path = `${uuidv4()}_${file?.name}`;
    const fileRef = this.storage.ref(path);
    const task = this.storage.upload(path, file);
    const downloadData$ = new Subject<DownloadData>();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((downloadUrl) => {
            downloadData$.next({
              downloadUrl,
              path
            });
            downloadData$.complete();
          });
        })
      )
      .subscribe();

    return downloadData$.pipe(filter(Boolean)) as Observable<DownloadData>;
  }

  removeUpload(filePath: string) {
    return this.storage.ref(filePath).delete();
  }

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
