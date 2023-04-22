import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { Privacy } from '@entities/Privacy';
import { MainContainer } from '@app/MainContainer';

const PrivacyPage = () => (
	<MainContainer title="Privacy Policy | Modsen client blog" description="Page with company's privacy">
		<Privacy />
	</MainContainer>
);

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	if (locale === undefined) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};
