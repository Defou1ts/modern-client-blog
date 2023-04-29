import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticPaths, GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { useLocale } from '@shared/hooks/useLocale';
import { CategoryPageWrapper } from '@app/wrappers/CategoryPageWrapper';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { posts } from '@entities/Post/lib/mock/posts';
import { PostList } from '@entities/Post/ui/PostList';
import { CategoryOverview } from '@widgets/CategoryOverview';
import { CategorySidebar } from '@widgets/CategorySidebar';
import { allPostTags } from '@entities/Post/lib/mock/allPostTags';

import type { Post, PostCategory } from '@entities/Post/interfaces';

interface CategoryPageProps {
	category: PostCategory;
	categoryPosts: Post[];
}

const PostPage = ({ category, categoryPosts }: CategoryPageProps) => {
	const { locale } = useLocale();

	const { title, description } = category;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<MainContainer title={`${translatedTitle} | Modsen client blog`} description={`${translatedDescription}`}>
			<CategoryPageWrapper>
				<article>
					<CategoryOverview category={category} />
				</article>
				<article>
					<PostList posts={categoryPosts} maxPosts={5} />
				</article>
				<article>
					<CategorySidebar allTags={allPostTags} activeTags={allPostTags} activeCategory={category} />
				</article>
			</CategoryPageWrapper>
		</MainContainer>
	);
};

export default PostPage;

interface AuthorPagePath {
	params: {
		name: string;
	};
	locale: string;
}

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
	if (locales === undefined) {
		return {
			paths: [],
			fallback: true,
		};
	}

	let paths: AuthorPagePath[] = [];

	locales.forEach((locale) => {
		const pathsWithLocale: AuthorPagePath[] = Object.values(allPostCategories).map((category) => ({
			params: {
				name: category.categoryType,
			},
			locale,
		}));

		paths = paths.concat(pathsWithLocale);
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
	const name = params?.name;

	const category = Object.values(allPostCategories).filter((category) => category.categoryType === name)[0];
	const categoryPosts = posts.filter((post) => post.category === category.categoryType);

	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			category,
			categoryPosts,
		},
	};
};
