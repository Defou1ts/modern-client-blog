import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { useLocale } from '@shared/lib/hooks/useLocale';
import { P } from '@shared/ui/P';

import type { CategoryOverviewProps } from './interfaces';

export const CategoryOverview = ({ category }: CategoryOverviewProps) => {
	const { locale } = useLocale();

	const { title, description, categoryType } = category;

	const translatedTitle = title[locale];
	const translatedDescription = description[locale];

	return (
		<article className={styles.wrapper}>
			<H type="display" className={styles.title}>
				{translatedTitle}
			</H>
			<P type="medium" className={styles.description}>
				{translatedDescription}
			</P>
			<p className={styles.path}>BLOG &gt; {categoryType} </p>
		</article>
	);
};
