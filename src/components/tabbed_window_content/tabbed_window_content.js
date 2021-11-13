import html from "./tabbed_window_content.html";
import "./tabbed_window_content.less";

function parseHtml(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

const template = parseHtml(html)[0];

export class TabbedWindowContent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = template.innerHTML;

    // default attributes
    this.headerLocation = "top";
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

window.customElements.define("tabbed-window-content", TabbedWindowContent);
