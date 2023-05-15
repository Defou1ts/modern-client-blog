import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import type { GetStaticProps } from 'next';

import { Privacy } from '@widgets/Privacy';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';

const PrivacyPage = () => (
	<>
		<Head>
			<meta name="description" content="Page with company's privacy" />
			<title>Privacy Policy | Modsen client blog</title>
		</Head>
		<Privacy />
	</>
);

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
		},
	};
};
