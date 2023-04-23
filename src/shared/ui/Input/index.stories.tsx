import { Input } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const InputMeta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
};

export default InputMeta;

const Template: StoryFn<typeof Input> = (args) => <Input style={{ color: 'black' }} {...args} />;

export const WithEror = Template.bind({});

WithEror.args = {
	field: {
		value: 'lorem ipsum',
		name: 'text',
		onChange: () => {},
		onBlur: () => {},
	},
	meta: {
		value: 'lorem ipsum',
		error: 'Invalid email',
		touched: true,
		initialTouched: true,
	},
};

export const Sample = Template.bind({});

Sample.args = {
	field: {
		value: 'lorem ipsum',
		name: 'text',
		onChange: () => {},
		onBlur: () => {},
	},
	meta: {
		value: 'lorem ipsum',
		error: undefined,
		touched: true,
		initialTouched: true,
	},
};
