import { Injectable, Optional, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatService {
  constructor(private datePipe: DatePipe, @Optional() @Inject('MAT_ADMINISTRATION_METADATA') private metadata: any) {}

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
