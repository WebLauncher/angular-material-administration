export interface MatAdministrationEntityField {
  hideInList: boolean;
  hideInForm: boolean;
  inputType: string;
  type: string;
  data: {
    type: string;
    collection: string;
    collectionValue: string;
    collectionLabel: string;
  }
  label: string;
  format: string;
  filePathField: string;
  style: Partial<{
    list: { [k: string]: any };
    form: { [k: string]: any };
  }>;
}

export interface MatAdministrationEntity {
  single: string;
  plural: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  showMenuDividerAfter: boolean;
  titleField: string;
  hideList: boolean;
  fields: { [k: string]: string | Partial<MatAdministrationEntityField>; }
}

export interface MatAdministrationMetadata {
  timestampFormat: string;
  entities: { [k: string]: Partial<MatAdministrationEntity>; }
}