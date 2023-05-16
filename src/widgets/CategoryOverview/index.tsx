import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { useLocale } from '@shared/lib/hooks/useLocale';
import { Paragraph } from '@shared/ui/Paragraph';

import type { CategoryOverviewProps } from './interfaces';

export const CategoryOverview = ({ category }: CategoryOverviewProps) => {
	const { locale } = useLocale();

	const { title, description, categoryType } = category;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<section className={styles.wrapper}>
			<Heading type="display" className={styles.title}>
				{translatedTitle}
			</Heading>
			<Paragraph type="medium" className={styles.description}>
				{translatedDescription}
			</Paragraph>
			<p className={styles.path}>BLOG &gt; {categoryType} </p>
		</section>
	);
};
