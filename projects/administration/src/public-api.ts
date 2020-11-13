/*
 * Public API Surface of material-administration
 */

export * from './lib/components';
export * from './lib/services';
export * from './lib/administration.routes';
export * from './lib/administration.module';

// types
export { DownloadData, DataAdapterInterface } from './lib/types/data-adapter';
export * from './lib/types/entity-field-input-type.enum';
export * from './lib/types/entity-field-type.enum';
export * from './lib/types/injection-tokens';
export { Immutable } from './lib/types/immutable';
export {
  MatAdministrationEntity,
  MatAdministrationEntityField,
  MatAdministrationFormLayout,
  MatAdministrationFormSection,
  MatAdministrationLayout,
  MatAdministrationMetadata
} from './lib/types/material-administration-metadata';
