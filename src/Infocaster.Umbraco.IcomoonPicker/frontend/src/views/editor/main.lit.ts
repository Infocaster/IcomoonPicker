import { AngularBridgeMixin } from "@/util/bridge/angularbridge.mixin";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/content.lit";

export const MainElementTag = "ic-icomoonpicker-editor";

@customElement(MainElementTag)
export class IcomoonPicker extends AngularBridgeMixin(
  LitElement,
  html`<ic-icomoonpicker-editor-content></ic-icomoonpicker-editor-content>`
) {
  async connectedCallback(): Promise<void> {
    super.connectedCallback();
  }
}
