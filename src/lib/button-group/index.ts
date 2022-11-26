import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

export type OctoButtonProps = {
	name: string
} & HTMLButtonElement;

/**
 * Button group element
 *
 * @slot - This element has a slot
 */
@customElement('octo-button-group')
export class OctoButtonGroup extends LitElement {

	static css = css`
		.octo-button-group {
			display: flex;
		}
	`

	render() {
    return html`
      <div class="octo-button-group">
				<slot></slot>
			</div>
    `
  }
}
