import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { PostAuthorDateInfo } from '../PostAuthorDateInfo';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { Button } from '@shared/ui/Button';
import { ROUTES } from '@shared/lib/constants/routes';
import { useLocale } from '@shared/lib/hooks/useLocale';

import type { FeaturedPostProps } from './interfaces';

export const FeaturedPost = ({ post, author }: FeaturedPostProps) => {
	const { locale } = useLocale();

	const { t } = useTranslation();

	const { previewImageURL, title, previewText, id: postId } = post;

	const localeTitle = title[locale];
	const localePreviewText = previewText[locale];

	return (
		<section className={styles.wrapper}>
			<div className={styles.post}>
				<div className={styles.content}>
					<p className={styles.featuredTitle}>{t('post.features-post-title')}</p>
					<Heading type="h2" className={styles.title}>
						{localeTitle}
					</Heading>
					<PostAuthorDateInfo author={author} post={post} type="purple" />
					<Paragraph type="medium" className={styles.previewText}>
						{localePreviewText}
					</Paragraph>
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
		</section>
	);
};
