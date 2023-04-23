import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { AboutPageWrapper } from '@app/wrappers/AboutPageWrapper';
import { AboutOverview } from '@widgets/AboutOverview';

const AboutPage = () => (
	<MainContainer
		title="About Us | Modsen client blog"
		description="Looking about Modsen history? You can learn interesting news about us"
	>
		<AboutPageWrapper>
			<AboutOverview />
		</AboutPageWrapper>
	</MainContainer>
);

export default AboutPage;

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
