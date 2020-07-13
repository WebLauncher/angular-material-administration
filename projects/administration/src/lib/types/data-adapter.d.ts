import { Observable } from 'rxjs';

interface DataAdapterInterface {
  get: (entity: string, id: string) => Observable<any>;
  list: (entity: string, idField: string) => Observable<any>;
  add: (entity: string, item: any) => Observable<any>;
  update: (entity: string, id: string, item: any) => Observable<any>;
  delete: (entity: string, id: string) => Observable<any>;
  upload: (file: File) => Observable<any>;
  removeUpload: (filePath: string) => Observable<any>;
  getTimestamp: () => any;
}

interface DownloadData {
  downloadUrl: string;
  path?: string;
}

export {
  DataAdapterInterface,
  DownloadData
};