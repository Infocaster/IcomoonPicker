import {
  assetsServiceContext,
  assetsServiceKey,
} from "@/context/assetsservice.context";
import {
  editorServiceContext,
  editorServiceKey,
} from "@/context/editorservice.context";
import { iconHelperContext, iconHelperKey } from "@/context/iconhelper.context";
import {
  localizationServiceContext,
  localizationServiceKey,
} from "@/context/localizationservice.context";
import { scopeContext, scopeContextKey } from "@/context/scope.context";
import { IAssetsService } from "@/models/assetsservice.model";
import { IEditorService } from "@/models/editorservice.model";
import { IIconHelper } from "@/models/iconhelper.model";
import { ILocalizationService } from "@/models/localizationservice.model";
import { IcomoonPicker, MainElementTag } from "./main.lit";

ngIcomoonpickerPanel.alias = "ngIcomoonpickerPanel";
ngIcomoonpickerPanel.$inject = [
  "localizationService",
  "iconHelper",
  "editorService",
  "assetsService",
];
export function ngIcomoonpickerPanel(
  localizationService: ILocalizationService,
  iconHelper: IIconHelper,
  editorService: IEditorService<any>,
  assetsService: IAssetsService
): angular.IDirective {
  return {
    restrict: "E",
    link: function (_scope, element) {
      const mainElement = document.createElement(
        MainElementTag
      ) as IcomoonPicker;

      mainElement.SetContext(
        localizationService,
        localizationServiceContext,
        localizationServiceKey
      );
      mainElement.SetContext(iconHelper, iconHelperContext, iconHelperKey);
      mainElement.SetContext(
        editorService,
        editorServiceContext,
        editorServiceKey
      );
      mainElement.SetContext(
        assetsService,
        assetsServiceContext,
        assetsServiceKey
      );
      mainElement.SetContext(_scope, scopeContext, scopeContextKey);

      element[0].appendChild(mainElement);
    },
  };
}
