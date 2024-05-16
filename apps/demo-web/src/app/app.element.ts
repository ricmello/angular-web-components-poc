import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <webc-welcome-element name="Web Team"></webc-welcome-element>
      `;
  }
}
customElements.define('web-components-root', AppElement);
