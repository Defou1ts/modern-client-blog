import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { PostList } from '@entities/Post/ui/PostList';

import type { AuthorPostListProps } from './interfaces';

export const AuthorPostList = ({ posts }: AuthorPostListProps) => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<Heading type="h1">{t('author.post-list')}</Heading>
			<PostList posts={posts} maxPosts={5} />
		</article>
	);
};
