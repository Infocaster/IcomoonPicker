import { assetsServiceContext } from "@/context/assetsservice.context";
import { editorServiceContext } from "@/context/editorservice.context";
import { localizationServiceContext } from "@/context/localizationservice.context";
import { scopeContext } from "@/context/scope.context";
import { IAssetsService } from "@/models/assetsservice.model";
import { IEditorService } from "@/models/editorservice.model";
import { ILocalizationService } from "@/models/localizationservice.model";
import { IScope } from "@/models/scope.model";
import { IcomoonService } from "@/services/icomoon.service";
import { cloneSvgNode } from "@/util/clonesvgnode.util";
import { consume } from "@lit/context";
import { LitElement, css, html, svg } from "lit";
import { customElement, state } from "lit/decorators.js";

export const ContentElementTag = "ic-icomoonpicker-editor-content";

@customElement(ContentElementTag)
export class IcomoonPickerContent extends LitElement {
  @consume({ context: scopeContext })
  private $scope!: IScope;

  @consume({ context: localizationServiceContext })
  private localizationService?: ILocalizationService;

  @consume({ context: editorServiceContext })
  private editorService?: IEditorService<typeof this.model>;

  @consume({ context: assetsServiceContext })
  private assetsService?: IAssetsService;

  @state()
  private model: string = "";

  @state()
  private loading: boolean = true;

  async connectedCallback(): Promise<void> {
    super.connectedCallback();

    if (!this.localizationService || !this.editorService || !this.assetsService)
      throw new Error(
        "Some services are missing, check: localizationService, editorService, assetsService"
      );

    if (this.$scope.model.value) {
      this.model = this.$scope.model.value;
    }

    await this.getIcons();
    cloneSvgNode(this.shadowRoot);

    this.loading = false;
  }

  edit() {
    const options = {
      title: "Select icon from icomoon",
      view: "/app_plugins/Infocaster.Umbraco.IcomoonPicker/panel/panel.html",
      size: "small",
      submit: this.submitPanel,
      close: this.closePanel,
      value: this.model,
    };

    this.editorService!.open(options);
  }

  submitPanel = (value: string) => {
    this.model = value;
    this.closePanel();
  };

  closePanel = () => {
    this.editorService!.close();
  };

  async getIcons() {
    if (!this.$scope?.$parent.model.config)
      throw new Error("This element requires icomoon config");

    const config = this.$scope.$parent.model.config;

    await this.assetsService!.loadJs(
      `https://i.icomoon.io/public/${config.projectCode}/${config.projectName}/svgxuse.js`
    );

    const svg = document.querySelector("body>svg");

    if (!svg) {
      const data = await IcomoonService.get(
        config.projectCode,
        config.projectName
      );

      const element = document.createElement("div");
      document.body.insertBefore(element, document.body.firstChild);
      element.outerHTML = data;
    }
  }

  loadedContent() {
    return html` ${!this.model
        ? html`<p>no icon selected</p>`
        : svg`<svg class=${`icomoon-icon ${this.model}`}>
        <use href=${`#${this.model}`}></use>
      </svg>`}
      <uui-button
        look="primary"
        label="edit"
        @click=${() => this.edit()}
        ?disabled=${this.loading}
      >
        <span><uui-icon name="icon-edit"></uui-icon>edit</span>
      </uui-button>`;
  }

  protected render() {
    return html`
      ${this.loading ? html`<uui-loader></uui-loader>` : this.loadedContent()}
    `;
  }

  static styles = css`
    uui-icon {
      margin-right: 0.5rem;
    }

    .icomoon-icon {
      display: flex;
      width: 32px;
      height: 32px;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
      padding: 0.5rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: icomoon;
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      line-height: 1;
      text-transform: none;
    }
  `;
}
