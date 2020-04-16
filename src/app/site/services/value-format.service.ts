import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatService {

  constructor(
    private datePipe: DatePipe
  ) { }

  transform(value: any, type: string, options = null) {
    switch (type) {
      case 'timestamp':
        return this.datePipe.transform(value?.toDate(), options?.format, options.timezone, options?.locale);
      default:
        return value;
    }
  }
}
