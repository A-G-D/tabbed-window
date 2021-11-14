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

  set newTabButton(btn) {
    if (btn) {
      this.#header.newTabButton = btn;
      btn.addEventListener("click", () => this.addNewTab());
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

  showTabByIndex(index) {
    const tab = this.tabs[index];
    this.showTab(tab);
  }

  showTab(tab) {
    if (this.currentTab === tab) return;

    const beforeSwitch = new CustomEvent("tab-beforeswitch", {
      cancelable: true,
      detail: {
        currentTab: this.currentTab,
      },
    });
    const canceled = !this.dispatchEvent(beforeSwitch);
    if (canceled) return;

    if (this.currentTab != null) this.currentTab.hide();
    if (tab != null) tab.show();
    this.currentTab = tab;

    const onSwitch = new CustomEvent("tab-switch", {
      detail: {
        previousTab: this.currentTab,
        currentTab: tab,
      },
    });
    this.dispatchEvent(onSwitch);
  }

  removeTabByIndex(index) {
    if (index < this.tabs.length) {
      const beforeClose = new CustomEvent("tab-beforeclose", {
        cancelable: true,
        detail: {
          tab: this.currentTab,
          index: index,
        },
      });
      const canceled = !this.dispatchEvent(beforeClose);
      if (canceled) return;

      const currentIndex = this.tabs.indexOf(this.currentTab);
      const tab = this.tabs[index];
      this.tabs.splice(index, 1);
      this.links.removeChild(tab.link);
      this.contents.removeChild(tab.content);

      const onClose = new CustomEvent("tab-close");
      this.dispatchEvent(onClose);

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

    const beforeOpen = new CustomEvent("tab-beforeopen", {
      cancelable: true,
      detail: { index },
    });
    const canceled = !this.dispatchEvent(beforeOpen);
    if (canceled) return;

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

    const onOpen = new CustomEvent("tab-open", { detail: { tab, index } });
    this.dispatchEvent(onOpen);

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
