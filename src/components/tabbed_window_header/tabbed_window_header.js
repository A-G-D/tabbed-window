import html from "./tabbed_window_header.html";
import "./tabbed_window_header.less";

function parseHtml(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

const template = parseHtml(html)[0];

export class TabbedWindowHeader extends HTMLElement {
  #links;
  #newTabButton;

  constructor() {
    super();

    this.innerHTML = template.innerHTML;

    this.#links = this.querySelector(".links");
    this.#newTabButton = this.querySelector(".new-tab-button");

    // default attributes
    this.headerLocation = "top";
  }

  get links() {
    return this.#links;
  }

  get newTabButton() {
    return this.#newTabButton;
  }

  set newTabButton(btn) {
    if (btn) {
      if (this.#newTabButton) {
        this.replaceChild(btn, this.#newTabButton);
      } else {
        btn.classList.add("new-tab-button");
        this.appendChild(btn);
      }
      this.#newTabButton = btn;
    }
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

window.customElements.define("tabbed-window-header", TabbedWindowHeader);
