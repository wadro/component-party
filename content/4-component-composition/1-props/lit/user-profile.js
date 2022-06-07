import { LitElement, html } from 'lit';

export class UserProfile extends LitElement {
  constructor() {
    super();
    this.name = '';
    this.age = 0;
    this.favouriteColors = [];
    this.isAvailable = false;
  }

  static get properties() {
    return {
      name: {type: String},
      age: {type: Number},
      favouriteColors: { type: Array },
      isAvailable: { type: Boolean }
    };
  }

	render() {
		return html`
			<p>My name is ${this.name}</p>
			<p>My age is ${this.age}</p>
			<p>My favourite coloros are ${this.favouriteColors.join(', ')}</p>
			<p>I am ${this.isAvailable ? 'available' : 'not available'}</p>
		`;
	}
}
window.customElements.define('user-profile', UserProfile);
