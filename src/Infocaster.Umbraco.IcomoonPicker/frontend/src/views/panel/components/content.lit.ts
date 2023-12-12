import { assetsServiceContext } from "@/context/assetsservice.context";
import { editorServiceContext } from "@/context/editorservice.context";
import { localizationServiceContext } from "@/context/localizationservice.context";
import { scopeContext } from "@/context/scope.context";
import { IAssetsService } from "@/models/assetsservice.model";
import { IEditorService } from "@/models/editorservice.model";
import { ILocalizationService } from "@/models/localizationservice.model";
import { IScope } from "@/models/scope.model";
import { cloneSvgNode } from "@/util/clonesvgnode.util";
import { consume } from "@lit/context";
import { LitElement, css, html, svg } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

export const ContentElementTag = "ic-icomoonpicker-panel-content";

@customElement(ContentElementTag)
export class IcomoonPickerContent extends LitElement {
  @consume({ context: scopeContext })
  private $scope?: IScope;

  @consume({ context: localizationServiceContext })
  private localizationService?: ILocalizationService;

  @consume({ context: editorServiceContext })
  private editorService?: IEditorService<typeof this.model>;

  @consume({ context: assetsServiceContext })
  private assetsService?: IAssetsService;

  @state()
  private model: string = "";

  @state()
  private icons: string[] = [];

  async connectedCallback(): Promise<void> {
    super.connectedCallback();

    if (!this.localizationService || !this.editorService || !this.assetsService)
      throw new Error(
        "Some services are missing, check: localizationService, editorService, assetsService"
      );

    const icons = cloneSvgNode(this.shadowRoot);
    icons.querySelectorAll("symbol").forEach((s) => {
      this.icons.push(s.id);
    });
  }

  close() {
    this.editorService!.close();
  }

  select(icon: string) {
    this.model = icon;
    this.$scope!.model.submit(icon);
  }

  protected render() {
    return html`
      <uui-box
        headline=${ifDefined(this.$scope?.model.title)}
        headline-variant="h1"
      >
        <div class="umb-iconpicker">
          ${this.icons.map(
            (icon) => svg`<svg
                class=${`icomoon-icon ${icon}`}
                @click=${() => this.select(icon)}
              >
                <use href=${`#${icon}`}></use>
              </svg>`
          )}
        </div>
      </uui-box>
    `;
  }

  static styles = css`
    .umb-iconpicker {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      max-height: calc(100vh - 72px);
      overflow-y: auto;
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
