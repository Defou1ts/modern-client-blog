import { Heading } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const HMeta: Meta<typeof Heading> = {
	title: 'H',
	component: Heading,
};

export default HMeta;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args}>Heading</Heading>;

export const Display = Template.bind({});

Display.args = {
	type: 'display',
};

export const H1 = Template.bind({});

H1.args = {
	type: 'h1',
};

export const H2 = Template.bind({});

H2.args = {
	type: 'h2',
};

export const H3 = Template.bind({});

H3.args = {
	type: 'h3',
};

export const H4 = Template.bind({});

H4.args = {
	type: 'h4',
};

export const H5 = Template.bind({});

H5.args = {
	type: 'h5',
};

export const H6 = Template.bind({});

H6.args = {
	type: 'h6',
};
