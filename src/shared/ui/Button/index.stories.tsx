import { Button } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const ButtonMeta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default ButtonMeta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}>Hello</Button>;

export const Primary = Template.bind({});

Primary.args = {
	type: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
	type: 'secondary',
};
