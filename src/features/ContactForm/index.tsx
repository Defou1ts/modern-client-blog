import { Field, Form, Formik } from 'formik';
import type { FieldProps } from 'formik';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { locations } from './lib/constants/locations';
import { initialValues } from './lib/constants/initialValues';
import { useContactFormValidationSchema } from './lib/hooks/useContactFormValidationSchema';

import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Select } from '@shared/ui/Select';
import { Textarea } from '@shared/ui/Textarea';
import { Paragraph } from '@shared/ui/Paragraph';
import { useSubmitFormState } from '@shared/lib/hooks/useSubmitFormState';
import { useGetFormApi } from '@shared/lib/hooks/useGetFormApi';
import { Spinner } from '@shared/ui/Spinner';

import type { HandleSubmit } from './types';
import type { ContactFormState } from './interfaces';

export const ContactForm = () => {
	const { isSuccess, isError, setSuccesWithTimeout, setErrorWithTimeout, isLoading, setLoading } =
		useSubmitFormState();

	const { t } = useTranslation();

	const { sendContactMessage } = useGetFormApi();

	const validationSchema = useContactFormValidationSchema();

	const handleSubmit: HandleSubmit = async (values, { resetForm }) => {
		resetForm();
		setLoading();
		const { isSuccess } = await sendContactMessage(values);
		if (isSuccess) {
			setSuccesWithTimeout(4000);
		} else {
			setErrorWithTimeout(4000);
		}
	};

	return (
		<section>
			<Formik
				className={styles.wrapper}
				validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				<Form className={styles.form} data-test-id="contact-form">
					<Field name="name" id="name" type="text">
						{(props: FieldProps<ContactFormState>) => (
							<Input
								className={styles.input}
								{...props}
								placeholder={t('contact.form.name') ?? ''}
								data-test-id="contact-form-input-name"
							/>
						)}
					</Field>
					<Field name="email" id="email" type="email">
						{(props: FieldProps<ContactFormState>) => (
							<Input
								className={styles.input}
								{...props}
								placeholder={t('contact.form.email') ?? ''}
								data-test-id="contact-form-input-email"
							/>
						)}
					</Field>
					<Field as="select" name="location" id="location" type="text">
						{(props: FieldProps<ContactFormState>) => (
							<Select className={styles.input} {...props} data-test-id="contact-form-select">
								<option value="">{t('contact.form.related')}</option>
								{locations.map(({ value, translationPath }) => (
									<option key={value} value={value} data-test-id="contact-form-option">
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
								data-test-id="contact-form-textarea"
							/>
						)}
					</Field>
					<Button appearance="primary" type="submit" data-test-id="contact-form-submit">
						{t('contact.form.send-button')}
					</Button>
				</Form>
			</Formik>
			{isSuccess && (
				<Paragraph type="medium" className={styles.success} data-test-id="contact-form-success">
					{t('contact.form.success')}
				</Paragraph>
			)}
			{isError && (
				<Paragraph type="medium" className={styles.error} data-test-id="contact-form-error">
					{t('contact.form.error')}
				</Paragraph>
			)}
			{isLoading && <Spinner />}
		</section>
	);
};
