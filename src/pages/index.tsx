import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { H } from '@shared/ui/H';

const Index = () => (
	<MainContainer title="Home | Modsen client blog" description="Modsen client blog">
		<H type="display">Home</H>
	</MainContainer>
);

export default Index;

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
