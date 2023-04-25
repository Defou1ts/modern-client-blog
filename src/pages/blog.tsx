import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { posts } from '@entities/Post/lib/mock/posts';
import { BlogPageWrapper } from '@app/wrappers/BlogPageWrapper';
import { PostList } from '@entities/Post/ui/PostList';
import { FeaturedPost } from '@entities/Post/ui/FeaturedPost';
import { authors } from '@entities/Author/lib/mock/authors';
import { JoinOurTeam } from '@widgets/JoinOurTeam';

import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

interface BlogPageProps {
	posts: Post[];
	featuredPost: Post;
	featuredPostAuthor: AuthorWithLocales;
}

const BlogPage = ({ posts, featuredPost, featuredPostAuthor }: BlogPageProps) => (
	<MainContainer title="Blog | Modsen client blog" description="Let's see all of the posts of our content writers!">
		<BlogPageWrapper>
			<FeaturedPost post={featuredPost} author={featuredPostAuthor} />
			<PostList posts={posts} maxPosts={5} />
			<JoinOurTeam />
		</BlogPageWrapper>
	</MainContainer>
);

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	if (locale === undefined) {
		return {
			notFound: true,
		};
	}

	const featuredPost = posts[0];
	const featuredPostAuthor = authors.filter((author) => author.id === featuredPost.authorId)[0];

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			posts,
			featuredPost,
			featuredPostAuthor,
		},
	};
};
