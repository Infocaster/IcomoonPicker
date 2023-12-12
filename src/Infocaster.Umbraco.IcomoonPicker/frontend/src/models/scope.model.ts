import { ICustomEditor } from "./editorservice.model";

export interface IScope extends angular.IScope {
  $parent: IParentScope;
  model: ICustomEditor<string>;
}

interface IParentScope extends angular.IScope {
  model: {
    config: {
      projectCode: string;
      projectName: string;
    };
  };
}
