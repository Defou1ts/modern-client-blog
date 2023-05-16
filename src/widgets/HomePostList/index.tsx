import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { FeaturedPost } from './ui/FeaturedPost';
import { PostList } from './ui/PostList';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { ROUTES } from '@shared/lib/constants/routes';

import type { HomePostListProps } from './interfaces';

export const HomePostList = ({ featuredPost, featuredPostAuthor, posts, postsAuthors }: HomePostListProps) => {
	const { t } = useTranslation();

	return (
		<section data-test-id="home-post-list" className={styles.wrapper}>
			<div className={styles.item}>
				<Heading type="h2" className={styles.title}>
					{t('home.postlist.featured-post-title')}
				</Heading>
				<FeaturedPost post={featuredPost} author={featuredPostAuthor} />
			</div>
			<div className={styles.item}>
				<div className={styles.postlistTitleWrapper}>
					<Heading type="h2" className={styles.title}>
						{t('home.postlist.all-posts-title')}
					</Heading>
					<Link href={ROUTES.BLOG} className={styles.viewAll}>
						<Paragraph type="medium">{t('home.postlist.view-all')}</Paragraph>
					</Link>
				</div>
				<PostList posts={posts} postsAuthors={postsAuthors} />
			</div>
		</section>
	);
};
