import Image from 'next/image';

import styles from './index.module.scss';

import { useLocale } from '@shared/hooks/useLocale';

import type { PostImageOverviewProps } from './interfaces';

export const PostImageOverview = ({ post }: PostImageOverviewProps) => {
	const { locale } = useLocale();

	const { previewImageURL, title } = post;

	const translatedTitle = title[locale];

	return (
		<article className={styles.imageWrapper}>
			<Image src={previewImageURL} alt={translatedTitle} title={translatedTitle} width={1280} height={580}/>
		</article>
	);
};
