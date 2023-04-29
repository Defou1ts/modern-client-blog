import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

import type { ContactFormState } from '../../interfaces';

export const useContactFormValidationSchema = () => {
	const { t } = useTranslation();

	const validationSchema = Yup.object<ContactFormState>({
		name: Yup.string().required(t('contact.form.errors.name') ?? ''),
		email: Yup.string().required(t('contact.form.errors.email') ?? ''),
		location: Yup.string().required(t('contact.form.errors.location') ?? ''),
		message: Yup.string()
			.required(t('contact.form.errors.requiredmessage') ?? '')
			.min(40, t('contact.form.errors.message') ?? ''),
	});

	return validationSchema;
};
