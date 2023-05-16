import { useTranslation } from 'next-i18next';
import { Formik, Form } from 'formik';
import type { FormikHelpers } from 'formik';

import styles from './index.module.scss';
import { useSubscribeFormValidationSchema } from './lib/hooks/useSubscribeFormValidationSchema';
import { initialValues } from './lib/constants/initialValues';

import { useSubmitFormState } from '@shared/lib/hooks/useSubmitFormState';
import { useGetFormApi } from '@shared/lib/hooks/useGetFormApi';
import { Heading } from '@shared/ui/Heading';
import { Button } from '@shared/ui/Button';
import { Paragraph } from '@shared/ui/Paragraph';
import { Spinner } from '@shared/ui/Spinner';
import { FormikInput } from '@shared/ui/FormikInput';

import type { SubscribeFormState } from './interfaces';

export const SubscribeForm = () => {
	const { isSuccess, isError, isLoading, setSuccesWithTimeout, setErrorWithTimeout, setLoading } =
		useSubmitFormState();

	const { t } = useTranslation();

	const { sendSubscribeMessage } = useGetFormApi();

	const validationSchema = useSubscribeFormValidationSchema();

	const handleSubmit = async ({ email }: SubscribeFormState, { resetForm }: FormikHelpers<SubscribeFormState>) => {
		resetForm();
		setLoading();
		const { isSuccess } = await sendSubscribeMessage(email);
		if (isSuccess) {
			setSuccesWithTimeout(4000);
		} else {
			setErrorWithTimeout(4000);
		}
	};

	return (
		<div className={styles.formWrapper}>
			<Heading type="h2" className={styles.title}>
				{t('subscribe.title')}
			</Heading>
			<Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={styles.form}>
					<FormikInput
						name="email"
						id="email"
						type="email"
						className={styles.input}
						placeholder={t('subscribe.placeholder') ?? ''}
						data-test-id="subsribe-form-input"
					/>
					<Button appearance="primary" type="submit" data-test-id="subcribe-form-submit">
						{t('subscribe.button')}
					</Button>
					{isSuccess && (
						<Paragraph type="medium" className={styles.success} data-test-id="subsribe-form-success">
							{t('subscribe.form.success')}
						</Paragraph>
					)}
					{isError && (
						<Paragraph type="medium" className={styles.error} data-test-id="subsribe-form-error">
							{t('subscribe.form.error')}
						</Paragraph>
					)}
					{isLoading && <Spinner />}
				</Form>
			</Formik>
		</div>
	);
};
