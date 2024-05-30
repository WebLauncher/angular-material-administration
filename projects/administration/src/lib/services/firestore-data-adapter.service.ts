import {
 Inject, Injectable,
} from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import {
 from, Subject, Observable,
} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import {
 filter, tap,
} from 'rxjs/operators';
import {
 Storage, deleteObject, getDownloadURL, ref, uploadBytesResumable,
} from '@angular/fire/storage';
import {
 DataAdapterInterface, DownloadData,
} from '../types/data-adapter';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataAdapterService implements DataAdapterInterface {
  constructor(@Inject(Firestore) private db: Firestore, @Inject(Storage) private storage: Storage) {}

  get(collectionName: string, id: string) {
    return from(getDoc(doc(this.db, collectionName, id)).then((snapshot) => ({ ...snapshot.data(),
id }))).pipe(
      tap(console.log),
    );
  }

  list(collectionName: string, idField: string) {
    return collectionData(collection(this.db, collectionName), { idField });
  }

  add(collectionName: string, item: any) {
    return from(addDoc(collection(this.db, collectionName), item));
  }

  update(collectionName: string, id: string, item: any) {
    return from(updateDoc(doc(this.db, collectionName, id), item));
  }

  delete(collectionName: string, id: string) {
    return from(deleteDoc(doc(this.db, collectionName, id)));
  }

  upload(file: File): Observable<DownloadData> {
    const path = `${uuidv4()}_${file?.name}`;
    const fileRef = ref(this.storage, path);
    const task = uploadBytesResumable(fileRef, file);
    const downloadData$ = new Subject<DownloadData>();

    task.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            console.log('snapshot', snapshot);
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          downloadData$.next({
            downloadUrl: downloadURL,
            path,
          });
          downloadData$.complete();
        });
      },
    );

    return downloadData$.pipe(filter(Boolean)) as Observable<DownloadData>;
  }

  removeUpload(filePath: string) {
    return from(deleteObject(ref(this.storage, filePath)));
  }

  getTimestamp() {
    return serverTimestamp();
  }

  getDate(timestamp: any) {
    return timestamp?.toDate();
  }
}
