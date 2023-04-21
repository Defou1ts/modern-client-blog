import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { Button } from '@shared/ui/Button';

import type { SubscribeFormState } from './interfaces';

const initialValues: SubscribeFormState = {
	email: '',
};

const validationSchema = Yup.object({
	email: Yup.string().email(),
});

export const SubscribeForm = () => {
	const { t } = useTranslation();

	const handleSubmit = (values: SubscribeFormState, { resetForm }: FormikHelpers<SubscribeFormState>) => {
		resetForm();
	};

	return (
		<div className={styles.formWrapper}>
			<H type="h2" className={styles.title}>
				{t('subscribe.title')}
			</H>
			<Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
				{({ errors, touched }) => (
					<Form className={styles.form}>
						<Field
							placeholder="Enter Your Email"
							name="email"
							id="email"
							className={cn(styles.input, {
								[styles.error]: errors.email !== undefined && touched.email,
							})}
							type="email"
						/>
						<Button appearance="primary" type="submit">
							{t('subscribe.button')}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
