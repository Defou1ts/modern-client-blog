import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps } from 'next';

import { MainContainer } from '@app/wrappers/MainContainer';
import { posts } from '@entities/Post/lib/mock/posts';
import { BlogPageWrapper } from '@app/wrappers/BlogPageWrapper';

import type { Post } from '@entities/Post/interfaces';

interface BlogPageProps {
	posts: Post[];
}

const BlogPage = ({ posts }: BlogPageProps) => (
	<MainContainer title="Blog | Modsen client blog" description="Let's see all of the posts of our content writers!">
		<BlogPageWrapper>Hello</BlogPageWrapper>
	</MainContainer>
);

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	if (locale === undefined) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			posts,
		},
	};
};
