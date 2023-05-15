import { Paragraph } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const PMeta: Meta<typeof Paragraph> = {
	title: 'P',
	component: Paragraph,
};

export default PMeta;

const Template: StoryFn<typeof Paragraph> = (args) => (
	<Paragraph {...args}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione eveniet saepe quasi odit ipsum illum
		delectus amet atque ducimus! Officiis natus consequatur quas doloribus sed, accusantium adipisci quidem
		recusandae in quo quis ullam. Quaerat facere voluptatum tenetur veniam exercitationem!
	</Paragraph>
);

export const Medium = Template.bind({});

Medium.args = {
	type: 'medium',
};

export const Small = Template.bind({});

Small.args = {
	type: 'small',
};

export const Label = Template.bind({});

Label.args = {
	type: 'label',
};
