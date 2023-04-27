import { useTranslation } from 'next-i18next';
import { Formik, Form, Field } from 'formik';
import type { FieldProps, FormikHelpers } from 'formik';

import styles from './index.module.scss';
import { useSubscribeFormValidationSchema } from './lib/hooks/useSubscribeFormValidationSchema';
import { initialValues } from './lib/constants/initialValues';

import { H } from '@shared/ui/H';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { useGetFormApi } from '@shared/hooks/useGetFormApi';
import { useSubmitFormState } from '@shared/hooks/useSubmitFormState';
import { P } from '@shared/ui/P';

import type { SubscribeFormState } from './interfaces';

export const SubscribeForm = () => {
	const { isSuccess, isError, setSuccesWithTimeout, setErrorWithTimeout } = useSubmitFormState();

	const { t } = useTranslation();

	const { sendSubscribeMessage } = useGetFormApi();

	const validationSchema = useSubscribeFormValidationSchema();

	const handleSubmit = async ({ email }: SubscribeFormState, { resetForm }: FormikHelpers<SubscribeFormState>) => {
		resetForm();
		const { isSuccess } = await sendSubscribeMessage(email);
		console.log(isSuccess);
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
							<Input className={styles.input} {...props} placeholder={t('subscribe.placeholder') ?? ''} />
						)}
					</Field>
					<Button appearance="primary" type="submit">
						{t('subscribe.button')}
					</Button>
					{isSuccess && (
						<P type="medium" className={styles.success}>
							{t('subscribe.form.success')}
						</P>
					)}
					{isError && (
						<P type="medium" className={styles.error}>
							{t('subscribe.form.error')}
						</P>
					)}
				</Form>
			</Formik>
		</div>
	);
};
