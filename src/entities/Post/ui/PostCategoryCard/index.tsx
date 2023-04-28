import Image from 'next/image';
import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { ROUTES } from '@shared/contants/routes';
import { useLocale } from '@shared/hooks/useLocale';

import type { PostCategoryCardProps } from './interfaces';

export const PostCategoryCard = ({ postCategory, type }: PostCategoryCardProps) => {
	const { locale } = useLocale();

	const { category, icon, title, description } = postCategory;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<Link href={`${ROUTES.CATEGORY}${category}`}>
			<div className={cn(styles.card, styles[type])}>
				<Image src={icon} alt={translatedTitle} title={translatedTitle} />
				<H type="h3" className={styles.title}>
					{translatedTitle}
				</H>
				{type === 'large' && (
					<P type="medium" className={styles.description}>
						{translatedDescription}
					</P>
				)}
			</div>
		</Link>
	);
};
