import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// not real props, just for setup
export type OctoButtonProps = {
	name: string
} & HTMLButtonElement;

/**
 * Button element
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('octo-button')
export class OctoButton extends LitElement {
	/** Name to display */
	@property({ reflect: true }) name?: string;

	static css = css`
		.button {
			background-color: red;
		}
	`

	render() {
    return html`
      <div class="button">
				Hello, ${this.name}
      </div>
    `
  }
}
