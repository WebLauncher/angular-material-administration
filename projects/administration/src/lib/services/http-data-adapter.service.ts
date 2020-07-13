import { Injectable, Optional, Inject } from '@angular/core';
import { DataAdapterInterface } from '../types/data-adapter';
import { HttpClient } from '@angular/common/http';
import { Immutable } from '../types/immutable';
import { MatAdministrationMetadata } from '../types/material-administration-metadata';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataAdapterService implements DataAdapterInterface {

  constructor(
    private http: HttpClient,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') private metadata: Immutable<MatAdministrationMetadata>
  ) { }

  get(entity: string, id: string) {
    return this.http.get(`${this.getApiUrl(entity)}${entity}/${id}`, this.getApiHttpOptions(entity));
  }

  list(entity: string, idField: string) {
    return this.http.get(`${this.getApiUrl(entity)}${entity}`, this.getApiHttpOptions(entity));
  }

  add(entity: string, item: any) {
    return this.http.post(`${this.getApiUrl(entity)}${entity}`, item, this.getApiHttpOptions(entity));
  }

  update(entity: string, id: string, item: any) {
    return this.http.put(`${this.getApiUrl(entity)}${entity}/${id}`, item, this.getApiHttpOptions(entity));
  }

  delete(entity: string, id: string) {
    return this.http.delete(`${this.getApiUrl(entity)}${entity}/${id}`, this.getApiHttpOptions(entity));
  }

  upload(file: File) {
    // TODO upload call implementation
    return of({
      downloadUrl: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      path: 'not implemented'
    });
  }

  removeUpload(filePath: string) {
    // TODO remove upload implementation
    return of('');
  }

  getTimestamp() {
    return new Date().getTime();
  }

  getDate(timestamp: any) {
    return timestamp;
  }

  private getApiUrl(entity: string) {
    return this.metadata.entities?.[entity]?.data?.apiUrl || this.metadata?.data?.apiUrl || 'http://localhost:3000/';
  }

  private getApiHttpOptions(entity: string) {
    return this.metadata.entities?.[entity]?.data?.apiUrl || this.metadata?.data?.apiUrl || {};
  }
}
