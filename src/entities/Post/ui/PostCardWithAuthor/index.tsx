import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/hooks/useLocale';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { P } from '@shared/ui/P';
import { getFormattedDateByLocale } from '@shared/utils/getFormattedDateByLocale';
import { H } from '@shared/ui/H';

import type { PostCardWithAuthorProps } from './interfaces';

export const PostCardWithAuthor = ({ post, author }: PostCardWithAuthorProps) => {
	const { locale } = useLocale();

	const { t } = useTranslation();

	const { title, previewImageURL, authorId, createdAt, previewText, id } = post;

	const { content } = author;

	const { name, surname } = content[locale];

	const translatedTitle = title[locale];
	const translatedPreviewText = previewText[locale];

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={previewImageURL} alt={translatedTitle} title={translatedTitle} width={405} height={318} />
			</div>
			<div className={styles.content}>
				<P type="label" className={styles.additionalInfo}>
					{t('post.from')}{' '}
					<Link href={`/author/${authorId}`} className={styles.authorLink}>
						{getAuthorFullName(name, surname)}
					</Link>
					{'      '}|{'      '}
					{getFormattedDateByLocale(locale, new Date(createdAt))}
				</P>
				<H type="h3" className={styles.title}>
					<Link href={`/posts/${id}`} className={styles.postLink}>
						{translatedTitle}
					</Link>
				</H>
				<P type="medium" className={styles.previewText}>
					{translatedPreviewText}
				</P>
			</div>
		</div>
	);
};
