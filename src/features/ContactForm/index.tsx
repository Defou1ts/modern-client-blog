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
import { P } from '@shared/ui/P';
import { useSubmitFormState } from '@shared/hooks/useSubmitFormState';
import { useGetFormApi } from '@shared/hooks/useGetFormApi';

import type { HandleSubmit } from './types';
import type { ContactFormState } from './interfaces';

export const ContactForm = () => {
	const { isSuccess, isError, setSuccesWithTimeout, setErrorWithTimeout } = useSubmitFormState();

	const { t } = useTranslation();

	const { sendContactMessage } = useGetFormApi();

	const validationSchema = useContactFormValidationSchema();

	const handleSubmit: HandleSubmit = async (values, { resetForm }) => {
		resetForm();
		const { isSuccess } = await sendContactMessage(values);
		console.log(isSuccess);
		if (isSuccess) {
			setSuccesWithTimeout(4000);
		} else {
			setErrorWithTimeout(4000);
		}
	};

	return (
		<article>
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
								<option value="">{t('contact.form.related')}</option>
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
			{isSuccess && (
				<P type="medium" className={styles.success}>
					{t('contact.form.success')}
				</P>
			)}
			{isError && (
				<P type="medium" className={styles.error}>
					{t('contact.form.error')}
				</P>
			)}
		</article>
	);
};
