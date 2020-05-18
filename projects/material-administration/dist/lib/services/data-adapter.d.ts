import { Observable } from "rxjs";

export interface DataAdapterInterface {
  get: (collection: string, id: string) => Observable<any>;
  list: (collection: string, idField: string) => Observable<any>;
  add: (collection: string, item: any) => Observable<any>;
  update: (collection: string, id: string, item: any) => Observable<any>;
  delete: (collection: string, id: string) => Observable<any>;
  upload: (file: File) => Observable<any>;
  removeUpload: (filePath: string) => Observable<any>;
  getTimestamp: () => any;
}

export interface DownloadData {
  downloadUrl: string;
  path?: string;
}
