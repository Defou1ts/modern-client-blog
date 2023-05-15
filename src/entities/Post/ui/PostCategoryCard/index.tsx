import Image from 'next/image';
import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { ROUTES } from '@shared/lib/contants/routes';
import { useLocale } from '@shared/lib/hooks/useLocale';

import type { PostCategoryCardProps } from './interfaces';

export const PostCategoryCard = ({ postCategory, type, isActive }: PostCategoryCardProps) => {
	const { locale } = useLocale();

	const { categoryType: category, icon, title, description } = postCategory;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<Link
			data-test-id="category-link"
			href={`${ROUTES.CATEGORY}${category}`}
			className={cn({
				[styles.active]: isActive,
			})}
		>
			<div
				className={cn(styles.card, styles[type], {
					[styles.active]: isActive,
				})}
			>
				<Image src={icon} alt={translatedTitle} title={translatedTitle} className={styles.icon} />
				<Heading type="h3" className={styles.title}>
					{translatedTitle}
				</Heading>
				{type === 'large' && (
					<Paragraph type="medium" className={styles.description}>
						{translatedDescription}
					</Paragraph>
				)}
			</div>
		</Link>
	);
};
