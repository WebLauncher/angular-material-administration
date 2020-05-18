import { AngularFirestore } from '@angular/fire/firestore';
import { DataAdapterInterface, DownloadData } from './data-adapter';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import * as i0 from "@angular/core";
export declare class DataAdapterService implements DataAdapterInterface {
    private db;
    private storage;
    constructor(db: AngularFirestore, storage: AngularFireStorage);
    get(collection: string, id: string): Observable<unknown>;
    list(collection: string, idField: string): Observable<{
        [x: string]: string;
    }[]>;
    add(collection: string, item: any): Observable<import("@angular/fire/firestore").DocumentReference>;
    update(collection: string, id: string, item: any): Observable<void>;
    delete(collection: string, id: string): Observable<void>;
    upload(file: File): Observable<DownloadData>;
    removeUpload(filePath: string): Observable<any>;
    getTimestamp(): firebase.firestore.FieldValue;
    static ɵfac: i0.ɵɵFactoryDef<DataAdapterService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DataAdapterService>;
}
