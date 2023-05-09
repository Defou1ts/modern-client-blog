import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { CategoriesSwitcher } from '@features/CategoriesSwitcher';
import { H } from '@shared/ui/H';
import { TagsSwitcher } from '@features/TagsSwitcher';
import { SearchCategoryPostsByTag } from '@features/SearchCategoryPostsByTag';

import type { CategorySidebarProps } from './interfaces';

export const CategorySidebar = ({ activeCategory }: CategorySidebarProps) => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<SearchCategoryPostsByTag />
			<div>
				<H type="h2" className={styles.categoriesTitle}>
					{t('category.categories-list-title')}
				</H>
				<CategoriesSwitcher activeCategory={activeCategory} />
			</div>
			<div>
				<H type="h2" className={styles.tagsTitle}>
					{t('category.tags-list-title')}
				</H>
				<TagsSwitcher />
			</div>
		</article>
	);
};
