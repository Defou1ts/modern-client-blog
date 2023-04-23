import { Textarea } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const TextareaMeta: Meta<typeof Textarea> = {
	title: 'Textarea',
	component: Textarea,
};

export default TextareaMeta;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea style={{ color: 'black' }} {...args} />;

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
		error: 'Invalid Text',
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
