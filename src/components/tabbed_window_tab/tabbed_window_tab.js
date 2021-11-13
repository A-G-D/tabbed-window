import { TabbedWindowLink } from "../tabbed_window_link/tabbed_window_link.js";
import { TabbedWindowContent } from "../tabbed_window_content/tabbed_window_content.js";

export class TabbedWindowTab {
  #link;
  #content;

  constructor() {
    this.#link = new TabbedWindowLink();
    this.#content = new TabbedWindowContent();
  }

  get link() {
    return this.#link;
  }

  get content() {
    return this.#content;
  }

  get closeButton() {
    return this.#link.closeButton;
  }

  get name() {
    const linkContent = this.link.content;
    return linkContent ? linkContent.textContent : "";
  }

  set name(nameString) {
    const linkContent = this.link.content;
    if (linkContent) {
      linkContent.textContent = nameString;
    }
  }

  show() {
    this.link.classList.add("active");
    this.content.classList.add("active");
  }

  hide() {
    this.link.classList.remove("active");
    this.content.classList.remove("active");
  }
}
