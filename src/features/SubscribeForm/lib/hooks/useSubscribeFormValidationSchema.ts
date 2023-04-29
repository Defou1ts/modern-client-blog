import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

import type { SubscribeFormState } from '../../interfaces';

export const useSubscribeFormValidationSchema = () => {
	const { t } = useTranslation();

	const validationSchema = Yup.object<SubscribeFormState>({
		email: Yup.string().email(t('subscribe.error') ?? ''),
	});

	return validationSchema;
};
