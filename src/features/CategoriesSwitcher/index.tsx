import styles from './index.module.scss';

import { PostCategoriesList } from '@entities/Post/ui/PostCategoriesList';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { useBreakpoints } from '@shared/hooks/useBreakpoints';

import type { CategoriesSwitcherProps } from './interfaces';

export const CategoriesSwitcher = ({ activeCategory }: CategoriesSwitcherProps) => {
	const { isLx } = useBreakpoints();

	return (
		<div className={styles.wrapper}>
			<PostCategoriesList
				categories={Object.values(allPostCategories)}
				activeCategory={activeCategory}
				postCategoryCardType={isLx ? 'small' : 'medium'}
				type="vertical"
			/>
		</div>
	);
};
