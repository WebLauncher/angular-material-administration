import { ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { EntityFieldType } from './entity-field-type.enum';
import { EntityFieldInputType } from './entity-field-input-type.enum';

interface MatFormEntityField {
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

interface MatFormLayout {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  mainAlign?: 'none' | 'start' | 'center' | 'end' | 'stretch';
  crossAlign?: 'none' | 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  gap?: string;
}

interface MatFormSection {
  title: string;
  subtitle: string;
  fields: string[] | Partial<MatFormEntityField>[];
  layout: Partial<MatFormLayout>;
}

interface MatFormSectionsLayout extends MatFormLayout {
  sections: Array<Partial<MatFormSection>>;
}

export {
  MatFormEntityField,
  MatFormLayout,
  MatFormSection,
  MatFormSectionsLayout
};
