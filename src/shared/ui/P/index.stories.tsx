import { P } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const PMeta: Meta<typeof P> = {
	title: 'P',
	component: P,
};

export default PMeta;

const Template: StoryFn<typeof P> = (args) => (
	<P {...args}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione eveniet saepe quasi odit ipsum illum
		delectus amet atque ducimus! Officiis natus consequatur quas doloribus sed, accusantium adipisci quidem
		recusandae in quo quis ullam. Quaerat facere voluptatum tenetur veniam exercitationem!
	</P>
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
