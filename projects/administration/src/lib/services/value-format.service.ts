import { Injectable, Optional, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EntityFieldType } from '../types/entity-field-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatService {
  constructor(private datePipe: DatePipe, @Optional() @Inject('MAT_ADMINISTRATION_METADATA') private metadata: any) { }

  transform(value: any, type: string, options = null) {
    switch (type) {
      case EntityFieldType.Timestamp:
        return this.datePipe.transform(
          value?.toDate(),
          options?.format || this.metadata?.timestampFormat || 'medium',
          options.timezone,
          options?.locale
        );
      default:
        return value;
    }
  }
}
