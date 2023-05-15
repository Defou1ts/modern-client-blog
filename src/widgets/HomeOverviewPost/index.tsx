import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { Heading } from '@shared/ui/Heading';
import { ROUTES } from '@shared/lib/contants/routes';
import { Paragraph } from '@shared/ui/Paragraph';
import { Button } from '@shared/ui/Button';
import { PostAuthorDateInfo } from '@entities/Post/ui/PostAuthorDateInfo';

import type { HomeOverviewPostProps } from './interfaces';

export const HomeOverviewPost = ({ author, post }: HomeOverviewPostProps) => {
	const { t } = useTranslation();
	const { locale } = useLocale();

	const { category, title: postTitle, previewText, id: postId } = post;
	const translatedPreviewText = previewText[locale];
	const translatedPostTitle = postTitle[locale];

	const { title: categoryTitle } = allPostCategories[category];
	const translatedCategoryTitle = categoryTitle[locale];

	return (
		<article data-test-id="home-overview-post" className={styles.backgroundImageWrapper}>
			<div className={styles.backgroundEffectWrapper}>
				<div className={styles.content}>
					<p className={styles.categoryInfo}>
						{t('home.overview.posted-on')}{' '}
						<span className={styles.category}>{translatedCategoryTitle}</span>
					</p>
					<Heading type="display" className={styles.title}>
						{translatedPostTitle}
					</Heading>
					<PostAuthorDateInfo post={post} author={author} type="yellow" className={styles.author} />
					<Paragraph type="medium" className={styles.description}>
						{translatedPreviewText}
					</Paragraph>
					<Button appearance="primary" className={styles.button}>
						<Link href={`${ROUTES.POSTS}${postId}`} data-test-id="home-overview-post-link">
							{t('home.overview.read-more')}
						</Link>
					</Button>
				</div>
			</div>
		</article>
	);
};
