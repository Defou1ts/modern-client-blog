import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import type { GetStaticProps } from 'next';

import { AboutPageWrapper } from '@app/wrappers/AboutPageWrapper';
import { AboutOverview } from '@widgets/AboutOverview';
import { AboutOurTeam } from '@widgets/AboutOurTeam';
import { AuthorList } from '@entities/Author/ui/AuthorList';
import { authors } from '@entities/Author/lib/mock/authors';
import { JoinOurTeam } from '@widgets/JoinOurTeam';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';

import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface AboutPageProps {
	authors: AuthorWithLocales[];
}

const AboutPage = ({ authors }: AboutPageProps) => (
	<>
		<Head>
			<meta name="description" content="Looking about Modsen history? You can learn interesting news about us" />
			<title>About Us | Modsen client blog</title>
		</Head>
		<AboutPageWrapper>
			<AboutOverview />
			<AboutOurTeam />
			<AuthorList authors={authors} />
			<JoinOurTeam />
		</AboutPageWrapper>
	</>
);

export default AboutPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			authors,
		},
	};
};
