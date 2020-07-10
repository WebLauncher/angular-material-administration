# Entity fields configuration

A field configuration can be and avanced object implementation of `MatAdministrationEntityField` that would allow more complex configuration of field details in the app.

~~~ts
{
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
~~~

## id: string

This defines the internal id that will be used to identify the field in references (not required - default will be the field reference in entity definition).

## name: string

This defines the name of the field that will be used internally to as reference (not required - default will be the field reference in entity definition)

## hideInList: boolean

This defines if the field will hide in list view (table) of the entity administration. (default: false)

## showInList: boolean

This defines if the field will show in the list (table) of the entity administration. (default: true). Same behavior as `hideInList` however in certain situation more representative to use. 

## hideInForm: boolean

This defines if the field should be hidden in form of the entity administration (add, update). (default: false) *Expections: timestamp fields are hidden by default*

## showInForm: boolean

This defines if the field should be visible in form of the entity administration (add, update). (default: true) *Expections: timestamp fields are hidden by default*

## inputType: EntityFieldInputType | string

This defines the field form representation in UI (the input form component to be used to edit the value). (default: 'text') Possible values are defined in `EntityFieldInputType`:

~~~ts
export enum EntityFieldInputType {
  Text = 'text',
  Select = 'select',
  Ckeditor = 'ckeditor',
  Radio = 'radio',
  Textarea = 'textarea',
  Image = 'image',
  File = 'file',
  Toggle = 'toggle',
  Checkbox = 'checkbox',
  Datepicker = 'datepicker'
}
~~~

## type: EntityFieldType | string

This defines the data representation type of the field (the internal data type). (default: 'string') Possible values are defined in `EntityFieldType`:

~~~ts
export enum EntityFieldType {
  String = 'string',
  Timestamp = 'timestamp',
  Boolean = 'boolean',
  Number = 'number'
}
~~~

## data: any

## label: string

This defines the label of the field that should be used in list (column name) or form (input label). (default - will be the entity field reference)

## format: string

This defines the format of the value shown in list (table).

## filePathField: string

This defines the storage path used to store the field data if input type is `file` or `image`. 

## style

~~~ts
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
~~~

This defines the styles for the field as shown in list or form (use angular component inline styling guides to push styles to the field).

## validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null

This defines validators rules that can be attached to the field in form view (default: Validators.required) (see angular forms validation guide for details)

## asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null

This defines async validators rules that will be attached to the field in form view (default: null) (see angular async validators guide for details)
