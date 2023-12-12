import { AngularBridgeMixin } from "@/util/bridge/angularbridge.mixin";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/content.lit";

export const MainElementTag = "ic-icomoonpicker-panel";

@customElement(MainElementTag)
export class IcomoonPicker extends AngularBridgeMixin(
  LitElement,
  html`<ic-icomoonpicker-panel-content></ic-icomoonpicker-panel-content>`
) {
  async connectedCallback(): Promise<void> {
    super.connectedCallback();
  }
}
