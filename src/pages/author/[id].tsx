import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticPaths, GetStaticProps } from 'next';

import { authors } from '@entities/Author/lib/mock/authors';
import { MainContainer } from '@app/wrappers/MainContainer';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { AuthorPageWrapper } from '@app/wrappers/AuthorPageWrapper';
import { AuthorOverview } from '@entities/Author/ui/AuthorOverview';

import type { AuthorWithLocales } from '@entities/Author/interfaces';

interface AuthorPageProps {
	author: AuthorWithLocales;
}

const AuthorPage = ({ author }: AuthorPageProps) => {
	const { locale } = useRouter();

	const { content } = author;

	const { name, surname } = content[locale ?? defaultLocale];

	return (
		<MainContainer
			title={`${getAuthorFullName(name, surname)} | Modsen client blog`}
			description={`${getAuthorFullName(name, surname)} is our content writer, let's read about`}
		>
			<AuthorPageWrapper>
				<AuthorOverview author={author} />
				<article>author</article>
			</AuthorPageWrapper>
		</MainContainer>
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

	const paths: AuthorPagePath[] = [];

	locales.forEach((locale) => {
		const pathsWithLocale: AuthorPagePath[] = authors.map((author) => ({
			params: {
				id: author.id.toString(),
			},
			locale,
		}));

		paths.concat(pathsWithLocale);
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
	if (typeof params?.id === 'string') {
		const author = authors.filter((author) => author.id.toString() === params?.id)[0];

		return {
			props: {
				...(await serverSideTranslations(locale ?? defaultLocale, ['common'])),
				author,
			},
		};
	} else {
		return {
			notFound: true,
		};
	}
};
