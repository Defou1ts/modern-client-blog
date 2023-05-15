import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import type { GetStaticPaths, GetStaticProps } from 'next';

import { authors } from '@entities/Author/lib/mock/authors';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { AuthorPageWrapper } from '@app/wrappers/AuthorPageWrapper';
import { AuthorOverview } from '@entities/Author/ui/AuthorOverview';
import { AuthorPostList } from '@widgets/AuthorPostList';
import { posts } from '@entities/Post/lib/mock/posts';
import { defaultLocale } from '@shared/lib/constants/defaultLocale';

import type { Post } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface AuthorPageProps {
	author: AuthorWithLocales;
	authorPosts: Post[];
}

const AuthorPage = ({ author, authorPosts }: AuthorPageProps) => {
	const { locale } = useRouter();

	const { content } = author;

	const { name, surname } = content[locale ?? defaultLocale];

	return (
		<>
			<Head>
				<meta
					name="description"
					content={`${getAuthorFullName(name, surname)} is our content writer, let's read about`}
				/>
				<title>{getAuthorFullName(name, surname)} | Modsen client blog</title>
			</Head>
			<AuthorPageWrapper>
				<AuthorOverview author={author} />
				<AuthorPostList posts={authorPosts} />
			</AuthorPageWrapper>
		</>
	);
};

export default AuthorPage;

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
		const pathsWithLocale: AuthorPagePath[] = authors.map((author) => ({
			params: {
				id: author.id.toString(),
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

	const author = authors.filter((author) => author.id.toString() === id)[0];
	const authorPosts = posts.filter((post) => post.authorId.toString() === id);

	return {
		props: {
			...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
			author,
			authorPosts,
		},
	};
};
