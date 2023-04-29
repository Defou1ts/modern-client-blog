import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { PostCategoriesList } from '@entities/Post/ui/PostCategoriesList';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { useBreakpoints } from '@shared/hooks/useBreakpoints';

import type { CategoriesListProps } from './interfaces';

export const CategoriesList = ({ activeCategory }: CategoriesListProps) => {
	const { t } = useTranslation();

	const { isLx } = useBreakpoints();

	return (
		<div className={styles.wrapper}>
			<H type="h2" className={styles.title}>
				{t('category.categories-list-title')}
			</H>
			<PostCategoriesList
				categories={Object.values(allPostCategories)}
				activeCategory={activeCategory}
				postCategoryCardType={isLx ? 'small' : 'medium'}
				type="vertical"
			/>
		</div>
	);
};
