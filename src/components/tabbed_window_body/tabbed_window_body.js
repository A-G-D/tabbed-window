import html from "./tabbed_window_body.html";
import "./tabbed_window_body.less";

function parseHtml(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

const template = parseHtml(html)[0];

export class TabbedWindowBody extends HTMLElement {
  #contents;

  constructor() {
    super();

    this.innerHTML = template.innerHTML;

    this.#contents = this.querySelector(".contents");

    // default attributes
    this.headerLocation = "top";
  }

  get contents() {
    return this.#contents;
  }

  get headerLocation() {
    return this.getAttribute("header-location");
  }

  set headerLocation(value) {
    this.setAttribute("header-location", value);
  }

  get reverse() {
    return this.hasAttribute("reverse");
  }

  set reverse(flag) {
    if (flag) {
      this.setAttribute("reverse", "");
    } else {
      this.removeAttribute("reverse");
    }
  }

  get changeOrientation() {
    return this.hasAttribute("change-orientation");
  }

  set changeOrientation(flag) {
    if (flag) {
      this.setAttribute("changeOrientation", "");
    } else {
      this.removeAttribute("changeOrientation");
    }
  }
}

window.customElements.define("tabbed-window-body", TabbedWindowBody);
