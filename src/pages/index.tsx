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
import { WhyWeStarted } from '@widgets/WhyWeStarted';
import { LogoList } from '@widgets/LogoList';
import { TestimonalsCarousel } from '@features/TestimonalsCarousel';
import { HomeAboutUs } from '@widgets/HomeAboutUs';
import { HomeOverviewPost } from '@widgets/HomeOverviewPost';
import { posts } from '@entities/Post/lib/mock/posts';

import type { Post, PostCategory } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface HomePageProps {
	authors: AuthorWithLocales[];
	categories: PostCategory[];
	post: Post;
	author: AuthorWithLocales;
}

const HomePage = ({ authors, categories, post, author }: HomePageProps) => (
	<MainContainer title="Home | Modsen client blog" description="Modsen client blog">
		<HomePageWrapper>
			<HomeOverviewPost post={post} author={author} />
			<article>1</article>
			<HomeAboutUs />
			<HomeCategoriesList categories={categories} />
			<WhyWeStarted />
			<AuthorList authors={authors} />
			<LogoList />
			<TestimonalsCarousel />
			<article>
				<JoinOurTeam />
			</article>
		</HomePageWrapper>
	</MainContainer>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const post = posts[0];
	const author = authors.find((author) => author.id === post.authorId);
	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			authors,
			categories: allPostCategories,
			post,
			author,
		},
	};
};
