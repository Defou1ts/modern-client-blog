import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import type { FieldProps, FormikHelpers } from 'formik';

import styles from './index.module.scss';
import { useSubscribeFormValidationSchema } from './lib/hooks/useSubscribeFormValidationSchema';
import { initialValues } from './lib/constants/initialValues';

import { useSubmitFormState } from '@shared/lib/hooks/useSubmitFormState';
import { useGetFormApi } from '@shared/lib/hooks/useGetFormApi';
import { H } from '@shared/ui/H';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { P } from '@shared/ui/P';
import { Spinner } from '@shared/ui/Spinner';

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
			<H type="h2" className={styles.title}>
				{t('subscribe.title')}
			</H>
			<Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={styles.form}>
					<Field name="email" id="email" type="email">
						{(props: FieldProps<SubscribeFormState>) => (
							<Input
								className={styles.input}
								{...props}
								placeholder={t('subscribe.placeholder') ?? ''}
								data-test-id="subsribe-form-input"
							/>
						)}
					</Field>
					<Button appearance="primary" type="submit" data-test-id="subcribe-form-submit">
						{t('subscribe.button')}
					</Button>
					{isSuccess && (
						<P type="medium" className={styles.success} data-test-id="subsribe-form-success">
							{t('subscribe.form.success')}
						</P>
					)}
					{isError && (
						<P type="medium" className={styles.error} data-test-id="subsribe-form-error">
							{t('subscribe.form.error')}
						</P>
					)}
					{isLoading && <Spinner />}
				</Form>
			</Formik>
		</div>
	);
};
