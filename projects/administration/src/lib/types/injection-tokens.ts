import { InjectionToken } from '@angular/core';
import { DataAdapterInterface } from './data-adapter';

export const MAT_ADMINISTRATION_METADATA = 'MAT_ADMINISTRATION_METADATA';

export const MAT_ADMINISTRATION_BASE_PATH = 'MAT_ADMINISTRATION_BASE_PATH';

export const MAT_ADMINISTRATION_DATA_ADAPTER = new InjectionToken<DataAdapterInterface>('DataAdapterInterface', {
  factory: () => undefined
});
