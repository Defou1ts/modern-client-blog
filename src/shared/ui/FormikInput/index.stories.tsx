import { Form, Formik } from 'formik';

import { FormikInput } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const FormikInputMeta: Meta<typeof FormikInput> = {
	title: 'FormikInput',
	component: FormikInput,
};

export default FormikInputMeta;

const Template: StoryFn<typeof FormikInput> = (args) => (
	<Formik initialValues={{ email: '' }} onSubmit={() => {}}>
		<Form>
			<FormikInput style={{ color: 'black' }} {...args} />
		</Form>
	</Formik>
);

export const Basic = Template.bind({});

Basic.args = {
	name: 'email',
	id: 'email',
	type: 'email',
	placeholder: 'Input',
};
