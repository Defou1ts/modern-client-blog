import { ArrowButton } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const ArrowButtonMeta: Meta<typeof ArrowButton> = {
	title: 'ArrowButton',
	component: ArrowButton,
};

export default ArrowButtonMeta;

const Template: StoryFn<typeof ArrowButton> = (args) => <ArrowButton {...args} />;

export const Left = Template.bind({});

Left.args = {
	type: 'left',
};

export const Right = Template.bind({});

Right.args = {
	type: 'right',
};
