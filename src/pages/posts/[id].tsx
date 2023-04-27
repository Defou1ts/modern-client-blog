import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticPaths, GetStaticProps } from 'next';

import { authors } from '@entities/Author/lib/mock/authors';
import { MainContainer } from '@app/wrappers/MainContainer';
import { posts } from '@entities/Post/lib/mock/posts';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { PostPageWrapper } from '@app/wrappers/PostPageWrapper';
import { PostAuthorInfo } from '@widgets/PostAuthorInfo';
import { PostImageOverview } from '@widgets/PostImageOverview';
import { useLocale } from '@shared/hooks/useLocale';
import { JoinOurTeam } from '@widgets/JoinOurTeam';

import type { Post } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface PostPageProps {
	post: Post;
	author: AuthorWithLocales;
}

const PostPage = ({ author, post }: PostPageProps) => {
	const { locale } = useLocale();

	const { title } = post;

	const translatedTitle = title[locale];

	return (
		<MainContainer title={`${translatedTitle} | Modsen client blog`} description={`${translatedTitle}`}>
			<PostPageWrapper>
				<PostAuthorInfo author={author} post={post} />
				<PostImageOverview post={post} />
				<article>1</article>
				<article>1</article>
				<JoinOurTeam />
			</PostPageWrapper>
		</MainContainer>
	);
};

export default PostPage;

interface AuthorPagePath {
	params: {
		id: string;
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
		const pathsWithLocale: AuthorPagePath[] = posts.map((post) => ({
			params: {
				id: post.id.toString(),
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
	const id = params?.id;

	const post = posts.filter((post) => post.id.toString() === id)[0];
	const author = authors.filter((author) => author.id === post.authorId)[0];

	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			post,
			author,
		},
	};
};
