import { EntityFieldType } from './entity-field-type.enum';
import { EntityFieldInputType } from './entity-field-input-type.enum';

export interface MatAdministrationEntityField {
  id?: string;
  name?: string;
  hideInList: boolean;
  showInList: boolean;
  hideInForm: boolean;
  showInForm: boolean;
  inputType: EntityFieldInputType | string;
  type: EntityFieldType | string;
  data: {
    type: string;
    collection: string;
    collectionValue: string;
    collectionLabel: string;
  };
  label: string;
  format: string;
  filePathField: string;
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
}

export interface MatAdministrationEntity {
  id?: string;
  single: string;
  plural: string;
  autoTimestamps: boolean;
  createdTimestamp: string;
  updatedTimestamp: string;
  showMenuDividerAfter: boolean;
  titleField: string;
  hideList: boolean;
  idField: string;
  fields: { [k: string]: string | Partial<MatAdministrationEntityField> };
  entities: { [k: string]: Partial<MatAdministrationEntity> };
}

export interface MatAdministrationMetadata {
  timestampFormat?: string;
  entities: { [k: string]: Partial<MatAdministrationEntity> };
}
