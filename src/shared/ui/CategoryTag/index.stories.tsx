import { CategoryTag } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const CategoryTagMeta: Meta<typeof CategoryTag> = {
	title: 'CategoryTag',
	component: CategoryTag,
};

export default CategoryTagMeta;

const Template: StoryFn<typeof CategoryTag> = (args) => <CategoryTag {...args}>Hello</CategoryTag>;

export const Tag = Template.bind({});

Tag.args = {
	tagName: 'Business',
};

export const ActiveTag = Template.bind({});

ActiveTag.args = {
	tagName: 'Business',
	isActive: true,
};
