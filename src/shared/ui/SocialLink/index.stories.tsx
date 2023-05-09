import { SocialLink } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const SocialLinkMeta: Meta<typeof SocialLink> = {
	title: 'SocialLink',
	component: SocialLink,
};

export default SocialLinkMeta;

const Template: StoryFn<typeof SocialLink> = (args) => <SocialLink {...args}>Hello</SocialLink>;

export const Facebook = Template.bind({});

Facebook.args = {
	type: 'facebook',
	path: '/',
};

export const Twitter = Template.bind({});

Twitter.args = {
	type: 'twitter',
	path: '/',
};

export const Instagram = Template.bind({});

Instagram.args = {
	type: 'instagram',
	path: '/',
};

export const Linkedin = Template.bind({});

Linkedin.args = {
	type: 'linkedin',
	path: '/',
};
