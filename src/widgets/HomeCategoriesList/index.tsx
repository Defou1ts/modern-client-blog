import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { PostCategoriesList } from '@entities/Post/ui/PostCategoriesList';

import type { HomeCategoriesListProps } from './interfaces';

export const HomeCategoriesList = ({ categories }: HomeCategoriesListProps) => {
	const { t } = useTranslation();

	return (
		<article data-test-id="home-categories-list">
			<Heading type="h2" className={styles.title}>
				{t('home.categories-title')}
			</Heading>
			<PostCategoriesList categories={categories} type="horizontal" postCategoryCardType="large" />
		</article>
	);
};
