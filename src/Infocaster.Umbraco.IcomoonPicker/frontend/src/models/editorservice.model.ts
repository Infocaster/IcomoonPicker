// based on https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.services.editorService
export interface IEditorService<T extends string> {
  blur: () => void;
  close: () => void;
  closeAll: () => void;
  copy: (editor: IEditor) => void;
  embed: (editor: IEditor) => void;
  focus: () => void;
  getEditors: () => IEditor[];
  open: (editor: ICustomEditor<T>) => void;
  submit: (value: T) => void;
}

interface IEditor {
  id: string;
  create: boolean;
  submit: () => void;
  close: () => void;
  parentId: string;
  documentTypeAlias: string;
  allowSaveAndClose: boolean;
  allowPublishAndClose: boolean;
}

export interface ICustomEditor<T> {
  title: string;
  view: string;
  size: string;
  submit: (value: string) => void;
  close: () => void;
  value: T;
}
