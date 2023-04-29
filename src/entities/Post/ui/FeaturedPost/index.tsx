import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { getFormattedDateByLocale } from '@shared/utils/getFormattedDateByLocale';
import { Button } from '@shared/ui/Button';
import { ROUTES } from '@shared/contants/routes';
import { useLocale } from '@shared/hooks/useLocale';

import type { FeaturedPostProps } from './interfaces';

export const FeaturedPost = ({ post, author }: FeaturedPostProps) => {
	const { locale } = useLocale();

	const { t } = useTranslation();

	const { id: authorId, content } = author;
	const { name, surname } = content[locale];

	const { previewImageURL, title, previewText, createdAt, id: postId } = post;

	const localeTitle = title[locale];
	const localePreviewText = previewText[locale];

	return (
		<article className={styles.wrapper}>
			<div className={styles.post}>
				<div className={styles.content}>
					<p className={styles.featuredTitle}>{t('post.features-post-title')}</p>
					<H type="h2" className={styles.title}>
						{localeTitle}
					</H>
					<P type="label" className={styles.additionalInfo}>
						{t('post.from')}{' '}
						<Link href={`${ROUTES.AUTHOR}${authorId}`} className={styles.authorLink}>
							{getAuthorFullName(name, surname)}
						</Link>
						{'      '}|{'      '}
						{getFormattedDateByLocale(locale, new Date(createdAt))}
					</P>
					<P type="medium" className={styles.previewText}>
						{localePreviewText}
					</P>
					<Link href={`${ROUTES.POSTS}${postId}`}>
						<Button appearance="primary" className={styles.readMoreButton}>
							Read More &gt;
						</Button>
					</Link>
				</div>
				<div className={styles.imageWrapper}>
					<Image src={previewImageURL} alt={localeTitle} title={localeTitle} width="490" height="318" />
				</div>
			</div>
		</article>
	);
};
