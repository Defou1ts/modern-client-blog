import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { ROUTES } from '@shared/lib/constants/routes';

import type { PostCardProps } from './interfaces';

export const PostCard = ({ post }: PostCardProps) => {
	const { locale } = useLocale();

	const { previewImageURL, title, previewText, category, id } = post;

	const localeTitle = title[locale];
	const localePreviewText = previewText[locale];

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={previewImageURL} alt={localeTitle} title={localeTitle} width="490" height="318" />
			</div>
			<div className={styles.info}>
				<span className={styles.category}>{category}</span>
				<Link href={`${ROUTES.POSTS}${id}`}>
					<Heading type="h2" className={styles.title}>
						{localeTitle}
					</Heading>
				</Link>
				<Paragraph type="medium" className={styles.previewText}>
					{localePreviewText}
				</Paragraph>
			</div>
		</div>
	);
};
