import { Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { locations } from './lib/constants/locations';
import { initialValues } from './lib/constants/initialValues';
import { useContactFormValidationSchema } from './lib/hooks/useContactFormValidationSchema';

import { Button } from '@shared/ui/Button';
import { Paragraph } from '@shared/ui/Paragraph';
import { useSubmitFormState } from '@shared/lib/hooks/useSubmitFormState';
import { useGetFormApi } from '@shared/lib/hooks/useGetFormApi';
import { Spinner } from '@shared/ui/Spinner';
import { FormikInput } from '@shared/ui/FormikInput';
import { FormikTextarea } from '@shared/ui/FormikTextarea';
import { FormikSelect } from '@shared/ui/FormikSelect';

import type { HandleSubmit } from './types';

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
					<FormikInput
						name="name"
						id="name"
						type="text"
						className={styles.input}
						placeholder={t('contact.form.name') ?? ''}
						data-test-id="contact-form-input-name"
					/>
					<FormikInput
						name="email"
						id="email"
						type="email"
						className={styles.input}
						placeholder={t('contact.form.email') ?? ''}
						data-test-id="contact-form-input-email"
					/>
					<FormikSelect
						name="location"
						id="location"
						className={styles.input}
						data-test-id="contact-form-select"
					>
						<option value="">{t('contact.form.related')}</option>
						{locations.map(({ value, translationPath }) => (
							<option key={value} value={value} data-test-id="contact-form-option">
								{t(translationPath)}
							</option>
						))}
					</FormikSelect>
					<FormikTextarea
						name="message"
						id="message"
						className={styles.textarea}
						placeholder={t('contact.form.message') ?? ''}
						data-test-id="contact-form-textarea"
					/>
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
