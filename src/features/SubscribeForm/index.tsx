import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import type { FieldProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';

import type { SubscribeFormState } from './interfaces';

const initialValues: SubscribeFormState = {
	email: '',
};

export const SubscribeForm = () => {
	const { t } = useTranslation();

	const handleSubmit = (values: SubscribeFormState, { resetForm }: FormikHelpers<SubscribeFormState>) => {
		console.log(values);
		resetForm();
	};

	const validationSchema = Yup.object({
		email: Yup.string().email(t('subscribe.error') ?? ''),
	});

	return (
		<div className={styles.formWrapper}>
			<H type="h2" className={styles.title}>
				{t('subscribe.title')}
			</H>
			<Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={styles.form}>
					<Field name="email" id="email" type="email">
						{(props: FieldProps<SubscribeFormState>) => (
							<Input {...props} placeholder={t('subscribe.placeholder') ?? ''} />
						)}
					</Field>
					<Button appearance="primary" type="submit">
						{t('subscribe.button')}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};
