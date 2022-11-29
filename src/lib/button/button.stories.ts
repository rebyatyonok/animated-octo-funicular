import { html } from 'lit';
import { Meta } from '@storybook/web-components';

import './index';

const meta: Meta = {
  title: 'Button',
	component: 'octo-button',
}

export default meta;

export const Default = () => html`
	<octo-button>
		<span slot="prefix">∆</span>
		button
		<span slot="postfix">©</span>
	</octo-button>
`;

export const NotDefault = () => html`
	<octo-button>
		Button
	</octo-button>
`;
