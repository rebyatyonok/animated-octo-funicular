import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// not real props, just for setup
export type OctoButtonProps = {
	type: 'light' | 'dark' | 'success' // TODO: get dynamically
} & HTMLButtonElement;

/**
 * Button element
 *
 * @slot - This element has a slot
 */
@customElement('octo-button')
export class OctoButton extends LitElement {
	@property({ reflect: true, type: String }) name?: string
	@property({ reflect: true, type: Boolean }) disabled?: boolean
	@property({ reflect: true, type: String }) type = 'light'
	@property({ reflect: false, type: Function }) handleClick?: Function

	static styles = css`
		:host {
			--padding: var(--spacing-3);
			--gap: var(--spacing-2);
		}
		button {
			display: flex;
			gap: var(--gap);
			padding: var(--padding);
			user-select: none;
			background: var(--light-darken);
			border: none;
		}

		button:hover {
			cursor: pointer;
		}

		button:active {
			background: var(--light-darkest);
		}
	`

	private _handleClick(e: Event) {
		if (this.disabled) {
			e.stopPropagation()
			return
		}

		// this.handleClick(e)
		console.log(this)
	}

	protected render() {
    return html`
      <button @click="${this._handleClick}">
				<slot class="prefix" name="prefix"></slot>
				<slot></slot>
				<slot class="postfix" name="postfix"></slot>
			</button>
    `
  }
}
