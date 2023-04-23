import { Field, Form, Formik } from 'formik';
import type { FieldProps } from 'formik';
import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

import styles from './index.module.scss';
import { locations } from './constants/locations';
import { initialValues } from './constants/initialValues';

import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Select } from '@shared/ui/Select';
import { Textarea } from '@shared/ui/Textarea';

import type { HandleSubmit } from './types';
import type { ContactFormState } from './interfaces';

export const ContactForm = () => {
	const { t } = useTranslation();

	const validationSchema = Yup.object<ContactFormState>({
		name: Yup.string().required(t('contact.form.errors.name') ?? ''),
		email: Yup.string().required(t('contact.form.errors.email') ?? ''),
		location: Yup.string().required(t('contact.form.errors.location') ?? ''),
		message: Yup.string()
			.required(t('contact.form.errors.requiredmessage') ?? '')
			.min(40, t('contact.form.errors.message') ?? ''),
	});

	const handleSubmit: HandleSubmit = (values, { resetForm }) => {
		resetForm();
	};

	return (
		<div>
			<Formik
				className={styles.wrapper}
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				<Form className={styles.form}>
					<Field name="name" id="name" type="text">
						{(props: FieldProps<ContactFormState>) => (
							<Input className={styles.input} {...props} placeholder={t('contact.form.name') ?? ''} />
						)}
					</Field>
					<Field name="email" id="email" type="email">
						{(props: FieldProps<ContactFormState>) => (
							<Input className={styles.input} {...props} placeholder={t('contact.form.email') ?? ''} />
						)}
					</Field>
					<Field as="select" name="location" id="location" type="text">
						{(props: FieldProps<ContactFormState>) => (
							<Select className={styles.input} {...props}>
								<option disabled selected>
									{t('contact.form.related')}
								</option>
								{locations.map(({ value, translationPath }) => (
									<option key={value} value={value}>
										{t(translationPath)}
									</option>
								))}
							</Select>
						)}
					</Field>
					<Field name="message" id="message" type="text">
						{(props: FieldProps<ContactFormState>) => (
							<Textarea
								className={styles.textarea}
								{...props}
								placeholder={t('contact.form.message') ?? ''}
							/>
						)}
					</Field>
					<Button appearance="primary" type="submit">
						{t('contact.form.send-button')}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};
