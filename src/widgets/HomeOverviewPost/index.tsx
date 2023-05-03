import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/hooks/useLocale';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { H } from '@shared/ui/H';
import { ROUTES } from '@shared/contants/routes';
import { P } from '@shared/ui/P';
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
		<article className={styles.backgroundImageWrapper}>
			<div className={styles.backgroundEffectWrapper}>
				<div className={styles.content}>
					<p className={styles.categoryInfo}>
						{t('home.overview.posted-on')}{' '}
						<span className={styles.category}>{translatedCategoryTitle}</span>
					</p>
					<H type="display" className={styles.title}>
						{translatedPostTitle}
					</H>
					<PostAuthorDateInfo post={post} author={author} type="yellow" className={styles.author} />
					<P type="medium" className={styles.description}>
						{translatedPreviewText}
					</P>
					<Button appearance="primary" className={styles.button}>
						<Link href={`${ROUTES.POSTS}${postId}`}>{t('home.overview.read-more')}</Link>
					</Button>
				</div>
			</div>
		</article>
	);
};
