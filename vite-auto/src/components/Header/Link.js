import { navigate } from "/src/router/index";
export class Link extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.path = this.getAttribute("to") || "/";
    this.label = this.textContent;
    this.render(this.path, this.label);
    this.attachEvent();
  }

  render(path, label) {
    this.shadowRoot.innerHTML = /* html */ `
    <li>
    <a href="${path}">${label}</a>
    </li>
   
    `;
  }
}
customElements.define("header-link", Link);
