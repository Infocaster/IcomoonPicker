import "@umbraco-ui/uui";
import { ngIcomoonpickerEditor } from "./directive";

const module = angular.module("umbraco");

module.directive(ngIcomoonpickerEditor.alias, ngIcomoonpickerEditor);
