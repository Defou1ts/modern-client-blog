import { useEffect } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticPaths, GetStaticProps } from 'next';
import { useDispatch } from 'react-redux';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { MainContainer } from '@app/wrappers/MainContainer';
import { defaultLocale } from '@shared/lib/contants/defaultLocale';
import { CategoryPageWrapper } from '@app/wrappers/CategoryPageWrapper';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { posts } from '@entities/Post/lib/mock/posts';
import { CategoryOverview } from '@widgets/CategoryOverview';
import { CategorySidebar } from '@widgets/CategorySidebar';
import { CategoryPostList } from '@widgets/CategoryPostList';
import { setPosts, setTags } from '@app/store/slices/category.slice';
import { allPostTags } from '@entities/Post/lib/mock/allPostTags';

import type { PostTag } from '@entities/Post/types';
import type { Post, PostCategory } from '@entities/Post/interfaces';

interface CategoryPageProps {
	category: PostCategory;
	categoryPosts: Post[];
	allPostTags: PostTag[];
}

const CategoryPage = ({ category, categoryPosts, allPostTags }: CategoryPageProps) => {
	const { locale } = useLocale();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPosts(categoryPosts));
	}, [categoryPosts, dispatch]);

	useEffect(() => {
		dispatch(setTags(allPostTags));
	}, [allPostTags, dispatch]);

	const { title, description } = category;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<MainContainer title={`${translatedTitle} | Modsen client blog`} description={`${translatedDescription}`}>
			<CategoryPageWrapper>
				<CategoryOverview category={category} />
				<CategoryPostList />
				<CategorySidebar activeCategory={category} />
			</CategoryPageWrapper>
		</MainContainer>
	);
};

export default CategoryPage;

interface AuthorPagePath {
	params: {
		type: string;
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
				type: category.categoryType,
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
	const type = params?.type;

	const category = Object.values(allPostCategories).filter((category) => category.categoryType === type)[0];
	const categoryPosts = posts.filter((post) => post.category === category.categoryType);

	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			category,
			categoryPosts,
			allPostTags,
		},
	};
};
