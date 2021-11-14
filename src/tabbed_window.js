import html from "./tabbed_window.html";
import "./tabbed_window.less";
import { TabbedWindowTab } from "./components/tabbed_window_tab/tabbed_window_tab.js";
import "./components/tabbed_window_header/tabbed_window_header.js";
import "./components/tabbed_window_body/tabbed_window_body.js";

function parseHtml(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;
  return container.children;
}

const template = parseHtml(html)[0];

export class TabbedWindow extends HTMLElement {
  #html;
  #header;
  #body;
  #tabs;

  constructor() {
    super();

    this.innerHTML = template.innerHTML;

    this.#header = this.querySelector("tabbed-window-header");
    this.#body = this.querySelector("tabbed-window-body");
    this.#tabs = [];
    this.#html = html;

    this.appendChild(this.#header);
    this.appendChild(this.#body);

    if (this.#header.newTabButton) {
      this.#header.newTabButton.addEventListener("click", () =>
        this.addNewTab()
      );
    }
  }

  get html() {
    return this.#html;
  }

  get header() {
    return this.#header;
  }

  get body() {
    return this.#body;
  }

  get links() {
    return this.#header.links;
  }

  get contents() {
    return this.#body.contents;
  }

  get tabs() {
    return this.#tabs;
  }

  get newTabButton() {
    return this.#header.newTabButton;
  }

  // set newTabButton(btn) {
  //   if (btn) {
  //     if (this.newTabButton) {
  //       this.header.replaceChild(btn, this.newTabButton);
  //     } else {
  //       this.classList.add("new-tab-button");
  //       this.header.appendChild(btn);
  //       btn.addEventListener("click", () => this.addNewTab());
  //     }
  //     this.#newTabButton = btn;
  //   }
  // }

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

  showTabByIndex(index) {
    const tab = this.tabs[index];
    this.showTab(tab);
  }

  showTab(tab) {
    if (this.currentTab === tab) return;
    if (this.currentTab != null) this.currentTab.hide();
    if (tab != null) tab.show();
    this.currentTab = tab;
  }

  removeTabByIndex(index) {
    if (index < this.tabs.length) {
      const currentIndex = this.tabs.indexOf(this.currentTab);
      const tab = this.tabs[index];
      this.tabs.splice(index, 1);
      this.links.removeChild(tab.link);
      this.contents.removeChild(tab.content);

      if (tab === this.currentTab) {
        this.currentTab = null;
        const i = Math.min(Math.max(currentIndex, 0), this.tabs.length - 1);
        this.showTabByIndex(i);
      }
    }
  }

  removeTab(tab) {
    const index = this.tabs.indexOf(tab);
    this.removeTabByIndex(index);
  }

  addNewTabAtIndex(index, name) {
    index = index ?? this.tabs.length;
    if (index > this.tabs.length) {
      throw new Error("Index out of bounds!");
    }

    if (index < 0) {
      index = this.tabs.length + index;
    }

    const tab = new TabbedWindowTab();
    tab.headerLocation = this.headerLocation;
    tab.name = name;

    tab.link.addEventListener("click", (e) => {
      this.showTabByIndex(this.tabs.indexOf(tab));
    });
    if (tab.closeButton) {
      tab.closeButton.addEventListener("click", (e) => {
        this.removeTabByIndex(this.tabs.indexOf(tab));
        e.stopPropagation();
      });
    }

    if (index === this.tabs.length) {
      this.tabs.push(tab);
      this.links.appendChild(tab.link);
      this.contents.appendChild(tab.content);
    } else {
      this.tabs.splice(tab, 0);
      const nextTab = this.tabs[index + 1];
      this.links.insertBefore(tab.link, nextTab.link);
      this.contents.insertBefore(tab.content, nextTab.content);
    }

    this.showTabByIndex(index);

    return tab;
  }

  addNewTab(name) {
    return this.addNewTabAtIndex(null, name);
  }

  clearTabs() {
    this.tabs.forEach((tab, index) => this.removeTabByIndex(index));
  }
}

window.customElements.define("tabbed-window", TabbedWindow);
