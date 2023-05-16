import { Formik, Form } from 'formik';

import { FormikSelect } from '.';

import type { Meta, StoryFn } from '@storybook/react';

const FormikSelectMeta: Meta<typeof FormikSelect> = {
	title: 'FormikSelect',
	component: FormikSelect,
};

export default FormikSelectMeta;

const Template: StoryFn<typeof FormikSelect> = (args) => (
	<Formik initialValues={{ email: '' }} onSubmit={() => {}}>
		<Form>
			<FormikSelect style={{ color: 'black' }} {...args}>
				<option value="1">Value 1</option>
				<option value="2">Value 2</option>
				<option value="3">Value 3</option>
			</FormikSelect>
		</Form>
	</Formik>
);

export const Basic = Template.bind({});

Basic.args = {
	name: 'email',
	id: 'email',
	placeholder: 'Input',
};
