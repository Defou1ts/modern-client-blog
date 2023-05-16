import { useRouter } from 'next/router';

import { defaultLocale } from '@shared/lib/constants/defaultLocale';

export const useLocale = () => {
	const { locale } = useRouter();

	return { locale: locale ?? defaultLocale };
};
