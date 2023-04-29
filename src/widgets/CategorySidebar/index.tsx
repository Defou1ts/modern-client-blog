import styles from './index.module.scss';
import { CategoriesList } from './ui/CategoriesList';

import type { CategorySidebarProps } from './interfaces';

export const CategorySidebar = ({ activeCategory, activeTags, allTags }: CategorySidebarProps) => {
	return (
		<div className={styles.wrapper}>
			<div>1</div>
			<CategoriesList activeCategory={activeCategory} />
			<div>1</div>
		</div>
	);
};
