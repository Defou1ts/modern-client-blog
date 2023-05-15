import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { PostAuthorDateInfo } from '@entities/Post/ui/PostAuthorDateInfo';
import { Heading } from '@shared/ui/Heading';
import { ROUTES } from '@shared/lib/constants/routes';
import { Paragraph } from '@shared/ui/Paragraph';
import { Button } from '@shared/ui/Button';

import type { FeaturedPostProps } from './interfaces';

export const FeaturedPost = ({ post, author }: FeaturedPostProps) => {
	const { t } = useTranslation();
	const { locale } = useLocale();

	const { previewImageURL, title, id, previewText } = post;
	const translatedTitle = title[locale];
	const translatedPreviewText = previewText[locale];

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={previewImageURL} alt={translatedTitle} title={translatedTitle} width={670} height={350} />
			</div>
			<PostAuthorDateInfo post={post} author={author} type="purple" className={styles.by} />
			<Heading type="h3" className={styles.title}>
				{translatedTitle}
			</Heading>
			<Paragraph type="medium" className={styles.description}>
				{translatedPreviewText}
			</Paragraph>
			<Link href={`${ROUTES.POSTS}${id}`} className={styles.button} data-test-id="home-post-list-featured-link">
				<Button appearance="primary">{t('read-more')}</Button>
			</Link>
		</div>
	);
};
