import { Portal } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const PortalMeta: Meta<typeof Portal> = {
	title: 'Portal',
	component: Portal,
};

export default PortalMeta;

const Template: StoryFn<typeof Portal> = () => <Portal>Test Portal</Portal>;

export const Basic = Template.bind({});
