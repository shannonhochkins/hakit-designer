import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators";

import ReactDOM from "react-dom";
import { createComponent } from "@lit/react";
import { createElement } from "react";

import * as pjson from "../package.json";

/* eslint no-console: 0 */
console.info(
  `%c  HAKIT_DESIGNER  \n%c Version ${pjson.version} `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "hakit-designer",
  name: "Hakit-Designer",
  preview: false,
  description: "A Beautiful & Elegant solution to custom dashboards",
});

@customElement("hakit-designer")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HakitDesigner extends LitElement {
  @property() private _path?: string;

  @property() private ReactApp: React.ComponentType | null = null;

  public async connectedCallback(): Promise<void> {
    super.connectedCallback();
    const module = await import(this._path ?? "unknown");
    this.ReactApp = createComponent(module.default);
    this.requestUpdate();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(
      this.shadowRoot?.querySelector("#react-root")
    );
    super.disconnectedCallback();
  }

  render() {
    const ReactApp = this.ReactApp;
    return html`<div id="react-root">
      ${ReactApp ? html`<${ReactApp} />` : ""}
    </div>`;
  }

  firstUpdated() {
    if (this.ReactApp) {
      ReactDOM.render(
        createElement(this.ReactApp),
        this.shadowRoot?.querySelector("#react-root")
      );
    }
  }
}
