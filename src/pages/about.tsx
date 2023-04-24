import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { AboutPageWrapper } from '@app/wrappers/AboutPageWrapper';
import { AboutOverview } from '@widgets/AboutOverview';
import { AboutOurTeam } from '@widgets/AboutOurTeam';
import { AuthorList } from '@entities/Author/ui/AuthorList';
import { authors } from '@entities/Author/lib/mock/authors';
import { JoinOurTeam } from '@widgets/JoinOurTeam';

import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface AboutPageProps {
	authors: AuthorWithLocales[];
}

const AboutPage = ({ authors }: AboutPageProps) => (
	<MainContainer
		title="About Us | Modsen client blog"
		description="Looking about Modsen history? You can learn interesting news about us"
	>
		<AboutPageWrapper>
			<AboutOverview />
			<AboutOurTeam />
			<AuthorList authors={authors} />
			<JoinOurTeam />
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
			authors,
		},
	};
};
