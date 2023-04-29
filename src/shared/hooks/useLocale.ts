import { useRouter } from 'next/router';

import { defaultLocale } from '@shared/contants/defaultLocale';

export const useLocale = () => {
	const { locale } = useRouter();

	return { locale: locale ?? defaultLocale };
};
