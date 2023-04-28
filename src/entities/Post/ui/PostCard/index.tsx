import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './index.module.scss';

import { defaultLocale } from '@shared/contants/defaultLocale';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { ROUTES } from '@shared/contants/routes';

import type { PostCardProps } from './interfaces';

export const PostCard = ({ post }: PostCardProps) => {
	const { locale } = useRouter();

	const { previewImageURL, title, previewText, category, id } = post;

	const localeTitle = title[locale ?? defaultLocale];
	const localePreviewText = previewText[locale ?? defaultLocale];

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={previewImageURL} alt={localeTitle} title={localeTitle} width="490" height="318" />
			</div>
			<div className={styles.info}>
				<p className={styles.category}>{category}</p>
				<Link href={`${ROUTES.POSTS}${id}`}>
					<H type="h2" className={styles.title}>
						{localeTitle}
					</H>
				</Link>
				<P type="medium" className={styles.previewText}>
					{localePreviewText}
				</P>
			</div>
		</div>
	);
};
