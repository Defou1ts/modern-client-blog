import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { HomePageWrapper } from '@app/wrappers/HomePageWrapper';
import { JoinOurTeam } from '@widgets/JoinOurTeam';
import { AuthorList } from '@entities/Author/ui/AuthorList';
import { authors } from '@entities/Author/lib/mock/authors';
import { HomeCategoriesList } from '@widgets/HomeCategoriesList';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';

import type { PostCategory } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface HomePageProps {
	authors: AuthorWithLocales[];
	categories: PostCategory[];
}

const HomePage = ({ authors, categories }: HomePageProps) => (
	<MainContainer title="Home | Modsen client blog" description="Modsen client blog">
		<HomePageWrapper>
			<article>1</article>
			<article>1</article>
			<article>1</article>
			<HomeCategoriesList categories={categories} />
			<article>1</article>
			<AuthorList authors={authors} />
			<article>1</article>
			<article>1</article>
			<article>
				<JoinOurTeam />
			</article>
		</HomePageWrapper>
	</MainContainer>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			authors,
			categories: allPostCategories,
		},
	};
};
