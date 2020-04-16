import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SiteMetadata } from '../../site-metadata';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatService {
  metadata = SiteMetadata;


  constructor(
    private datePipe: DatePipe
  ) { }

  transform(value: any, type: string, options = null) {
    switch (type) {
      case 'timestamp':
        return this.datePipe.transform(
          value?.toDate(),
          options?.format || this.metadata?.timestampFormat,
          options.timezone,
          options?.locale
        );
      default:
        return value;
    }
  }
}
