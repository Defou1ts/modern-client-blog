import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { getFeaturePostDateFormatedDate } from '@shared/utils/formatDateByLocale';
import { Button } from '@shared/ui/Button';

import type { FeaturedPostProps } from './interfaces';

export const FeaturedPost = ({ post, author }: FeaturedPostProps) => {
	const { locale } = useRouter();

	const { t } = useTranslation();

	const { id: authorId, content } = author;
	const { name, surname } = content[locale ?? defaultLocale];

	const { previewImageURL, title, previewText, createdAt, id: postId } = post;

	const localeTitle = title[locale ?? defaultLocale];
	const localePreviewText = previewText[locale ?? defaultLocale];

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
						<Link href={`author/${authorId}`} className={styles.authorLink}>
							{getAuthorFullName(name, surname)}
						</Link>
						{'      '}|{'      '}
						{getFeaturePostDateFormatedDate(locale, new Date(createdAt))}
					</P>
					<P type="medium" className={styles.previewText}>
						{localePreviewText}
					</P>
					<Link href={`blog/${postId}`}>
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
