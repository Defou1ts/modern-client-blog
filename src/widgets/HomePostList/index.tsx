import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { FeaturedPost } from './ui/FeaturedPost';
import { PostList } from './ui/PostList';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { ROUTES } from '@shared/contants/routes';

import type { HomePostListProps } from './interfaces';

export const HomePostList = ({ featuredPost, featuredPostAuthor, posts, postsAuthors }: HomePostListProps) => {
	const { t } = useTranslation();

	return (
		<article data-test-id="home-post-list" className={styles.wrapper}>
			<div className={styles.item}>
				<H type="h2" className={styles.title}>
					{t('home.postlist.featured-post-title')}
				</H>
				<FeaturedPost post={featuredPost} author={featuredPostAuthor} />
			</div>
			<div className={styles.item}>
				<div className={styles.postlistTitleWrapper}>
					<H type="h2" className={styles.title}>
						{t('home.postlist.all-posts-title')}
					</H>
					<Link href={ROUTES.BLOG} className={styles.viewAll}>
						<P type="medium">{t('home.postlist.view-all')}</P>
					</Link>
				</div>
				<PostList posts={posts} postsAuthors={postsAuthors} />
			</div>
		</article>
	);
};
