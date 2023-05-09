import { RectangleLine } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const RectangleLineMeta: Meta<typeof RectangleLine> = {
	title: 'RectangleLine',
	component: RectangleLine,
};

export default RectangleLineMeta;

const Template: StoryFn<typeof RectangleLine> = (args) => <RectangleLine {...args} />;

export const WithoutReverse = Template.bind({});

WithoutReverse.args = {};

export const Reverse = Template.bind({});

Reverse.args = {
	reverse: true,
};
