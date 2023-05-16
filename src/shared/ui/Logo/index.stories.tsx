import { Logo } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const LogoMeta: Meta<typeof Logo> = {
	title: 'Logo',
	component: Logo,
};

export default LogoMeta;

const Template: StoryFn<typeof Logo> = () => <Logo />;

export const Basic = Template.bind({});
