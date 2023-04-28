import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';

import { defaultLocale } from '@shared/contants/defaultLocale';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { ROUTES } from '@shared/contants/routes';

import type { PostCategoryCardProps } from './interfaces';

export const PostCategoryCard = ({ postCategory, type }: PostCategoryCardProps) => {
	const { locale } = useRouter();

	const { category, icon, title, description } = postCategory;

	const translatedTitle = title[locale ?? defaultLocale];
	const translatedDescription = description[locale ?? defaultLocale];

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
