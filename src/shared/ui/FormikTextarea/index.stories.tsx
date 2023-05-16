import { Formik, Form } from 'formik';

import { FormikTextarea } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const FormikTextareaMeta: Meta<typeof FormikTextarea> = {
	title: 'FormikTextarea',
	component: FormikTextarea,
};

export default FormikTextareaMeta;

const Template: StoryFn<typeof FormikTextarea> = (args) => (
	<Formik initialValues={{ email: '' }} onSubmit={() => {}}>
		<Form>
			<FormikTextarea style={{ color: 'black' }} {...args} />
		</Form>
	</Formik>
);

export const Basic = Template.bind({});

Basic.args = {
	name: 'email',
	id: 'email',
	placeholder: 'Input',
};
