import { LitElement, html } from 'lit';

import './user-profile';


export class XApp extends LitElement {
	render() {
		return html`<user-profile name="John" age="20" .favouriteColors=${['green', 'blue', 'red']} isavailable></user-profile>`;
	}
}
window.customElements.define('x-app', XApp);
