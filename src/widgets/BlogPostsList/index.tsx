import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { PostList } from '@entities/Post/ui/PostList';

import type { BlogPostListProps } from './interfaces';

export const BlogPostList = ({ posts }: BlogPostListProps) => {
	const { t } = useTranslation();

	return (
		<article>
			<H type="h1">{t('post.post-list-title')}</H>
			<div className={styles.line}></div>
			<PostList posts={posts} maxPosts={5} />
		</article>
	);
};
