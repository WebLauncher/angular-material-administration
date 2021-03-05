import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { StringLike } from '@firebase/util';
import { EntityFieldType } from './entity-field-type.enum';
import { EntityFieldInputType } from './entity-field-input-type.enum';

export interface MatFormEntityField {
  id?: string;
  name?: string;
  hideInList: boolean;
  showInList: boolean;
  hideInForm: boolean;
  showInForm: boolean;
  inputType: EntityFieldInputType | string;
  type: EntityFieldType | string;
  value: any;
  data: {
    type: string;
    entity: string;
    entityValue: string;
    entityLabel: string;
  };
  label: string;
  format: string;
  filePathField: string;
  options?: Array<{ value: any; label: StringLike; valueObject?: any }>;
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
  validatorMessages?: { [key: string]: string };
}

export interface MatFormLayout {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  mainAlign?: 'none' | 'start' | 'center' | 'end' | 'stretch';
  crossAlign?: 'none' | 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  gap?: string;
}

export interface MatFormSection {
  title: string;
  subtitle: string;
  fields: string[] | Array<Partial<MatFormEntityField>>;
  layout: Partial<MatFormLayout>;
}

export interface MatFormSectionsLayout extends MatFormLayout {
  sections: Array<Partial<MatFormSection>>;
}
