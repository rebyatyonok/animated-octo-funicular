import { html } from 'lit';
// import { Meta } from '@storybook/web-components';

import './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Button',
	component: 'octo-button',
}

export const Default = () => html`<octo-button></octo-button>`;

export const NotDefault = () => html`<octo-button name="Storybook"></octo-button>`;
