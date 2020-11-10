import { Injectable, Optional, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EntityFieldType } from '../types/entity-field-type.enum';
import { Immutable } from '../types/immutable';
import { MatAdministrationMetadata } from '../types/material-administration-metadata';
import { DataAdapterInterface } from '../types/data-adapter';

@Injectable({
  providedIn: 'root'
})
export class ValueFormatService {
  constructor(
    private datePipe: DatePipe,
    @Optional() @Inject('MAT_ADMINISTRATION_METADATA') private metadata: Immutable<MatAdministrationMetadata>,
    @Inject('MAT_ADMINISTRATION_DATA_ADAPTER') public dataAdapterService: DataAdapterInterface
  ) {}

  transform(value: any, type: string, options = null) {
    switch (type) {
      case EntityFieldType.Timestamp:
        return this.datePipe.transform(
          this.dataAdapterService.getDate(value),
          options?.format || this.metadata?.timestampFormat || 'medium',
          options.timezone,
          options?.locale
        );
      default:
        return value;
    }
  }
}
