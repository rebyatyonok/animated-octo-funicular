import { html } from 'lit';
import { Meta } from '@storybook/web-components';

import './index';

const meta: Meta = {
  title: 'Button Group',
	component: 'octo-button-group',
}

export default meta;

export const Default = () => html`
	<octo-button-group>
		<octo-button>One</octo-button>
		<octo-button>Two</octo-button>
		<octo-button>Three</octo-button>
	</octo-button-group>
`;
