import html from "./tabbed_window_link.html";
import "./tabbed_window_link.less";

function parseHtml(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

const template = parseHtml(html)[0];

export class TabbedWindowLink extends HTMLElement {
  #content;
  #closeButton;

  constructor() {
    super();

    this.innerHTML = template.innerHTML;

    this.#content = this.querySelector(".content");
    this.#closeButton = this.querySelector(".close-tab-button");

    // default attributes
    this.headerLocation = "top";
  }

  get closeButton() {
    return this.#closeButton;
  }

  get content() {
    return this.#content;
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

window.customElements.define("tabbed-window-link", TabbedWindowLink);
