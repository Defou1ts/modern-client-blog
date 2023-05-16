import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { CategoriesSwitcher } from '@features/CategoriesSwitcher';
import { Heading } from '@shared/ui/Heading';
import { TagsSwitcher } from '@features/TagsSwitcher';
import { SearchCategoryPostsByTag } from '@features/SearchCategoryPostsByTag';

import type { CategorySidebarProps } from './interfaces';

export const CategorySidebar = ({ activeCategory }: CategorySidebarProps) => {
	const { t } = useTranslation();

	return (
		<section className={styles.wrapper}>
			<SearchCategoryPostsByTag />
			<div>
				<Heading type="h2" className={styles.categoriesTitle}>
					{t('category.categories-list-title')}
				</Heading>
				<CategoriesSwitcher activeCategory={activeCategory} />
			</div>
			<div>
				<Heading type="h2" className={styles.tagsTitle}>
					{t('category.tags-list-title')}
				</Heading>
				<TagsSwitcher />
			</div>
		</section>
	);
};
