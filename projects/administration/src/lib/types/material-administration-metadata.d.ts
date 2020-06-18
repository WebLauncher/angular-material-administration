import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
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
    entity: string;
    entityValue: string;
    entityLabel: string;
  };
  label: string;
  format: string;
  filePathField: string;
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
}

export interface MatAdministrationLayout {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  mainAlign?: 'none' | 'start' | 'center' | 'end' | 'stretch';
  crossAlign?: 'none' | 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  gap?: string;
}

export interface MatAdministrationFormSection {
  title: string;
  subtitle: string;
  fields: string[] | Partial<MatAdministrationEntityField>[];
  layout: Partial<MatAdministrationLayout>;
}

export interface MatAdministrationFormLayout extends MatAdministrationLayout {
  sections: Array<Partial<MatAdministrationFormSection>>;
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
  icon: string;
  fields: { [k: string]: string | Partial<MatAdministrationEntityField> };
  entities: { [k: string]: Partial<MatAdministrationEntity> };
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
  layout: {
    list?: any;
    form?: Partial<MatAdministrationFormLayout>;
  };
}

export interface MatAdministrationMetadata {
  timestampFormat?: string;
  disableRedirectToFirstEntity?: boolean;
  entities: { [k: string]: Partial<MatAdministrationEntity> };
}
