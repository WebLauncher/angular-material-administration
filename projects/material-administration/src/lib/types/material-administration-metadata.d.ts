export interface MatAdministrationEntityField {
  id?: string;
  hideInList: boolean;
  showInList: boolean;
  hideInForm: boolean;
  showInForm: boolean;
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
  id?: string;
  single: string;
  plural: string;
  createdTimestamp: string;
  updatedTimestamp: string;
  showMenuDividerAfter: boolean;
  titleField: string;
  hideList: boolean;
  idField: string;
  fields: { [k: string]: string | Partial<MatAdministrationEntityField>; }
  entities: { [k: string]: Partial<MatAdministrationEntity>; }
}

export interface MatAdministrationMetadata {
  timestampFormat: string;
  entities: { [k: string]: Partial<MatAdministrationEntity>; }
}
