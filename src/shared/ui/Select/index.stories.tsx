import { Select } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const SelectMeta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
};

export default SelectMeta;

const Template: StoryFn<typeof Select> = (args) => (
	<Select style={{ color: 'black' }} {...args}>
		<option value="value1">value 1</option>
		<option value="value2">value 2</option>
		<option value="value3">value 2</option>
	</Select>
);

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
		error: 'Choose value',
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
