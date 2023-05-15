import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { Privacy } from '@widgets/Privacy';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';

const PrivacyPage = () => (
	<MainContainer title="Privacy Policy | Modsen client blog" description="Page with company's privacy">
		<Privacy />
	</MainContainer>
);

export default PrivacyPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
		},
	};
};
