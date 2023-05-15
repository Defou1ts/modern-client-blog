import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import type { GetStaticProps } from 'next';

import { posts } from '@entities/Post/lib/mock/posts';
import { BlogPageWrapper } from '@app/wrappers/BlogPageWrapper';
import { FeaturedPost } from '@entities/Post/ui/FeaturedPost';
import { authors } from '@entities/Author/lib/mock/authors';
import { JoinOurTeam } from '@widgets/JoinOurTeam';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { BlogPostCategoriesList } from '@widgets/BlogPostCategoriesList';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';
import { BlogPostList } from '@widgets/BlogPostList';

import type { Post, PostCategory } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface BlogPageProps {
	posts: Post[];
	featuredPost: Post;
	featuredPostAuthor: AuthorWithLocales;
	allPostCategories: PostCategory[];
}

const BlogPage = ({ posts, featuredPost, featuredPostAuthor, allPostCategories }: BlogPageProps) => (
	<>
		<Head>
			<meta name="description" content="Let's see all of the posts of our content writers!" />
			<title>Blog | Modsen client blog</title>
		</Head>
		<BlogPageWrapper>
			<FeaturedPost post={featuredPost} author={featuredPostAuthor} />
			<BlogPostList posts={posts} />
			<BlogPostCategoriesList categories={allPostCategories} />
			<JoinOurTeam />
		</BlogPageWrapper>
	</>
);

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const featuredPost = posts[0];
	const featuredPostAuthor = authors.filter((author) => author.id === featuredPost.authorId)[0];

	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			posts,
			featuredPost,
			featuredPostAuthor,
			allPostCategories,
		},
	};
};
