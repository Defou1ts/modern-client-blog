import cn from 'classnames';

import styles from './index.module.scss';

import { PostCategoryCard } from '@entities/Post/ui/PostCategoryCard';

import type { PostCategoriesListProps } from './interfaces';

export const PostCategoriesList = ({
	categories,
	type,
	postCategoryCardType,
	activeCategory,
}: PostCategoriesListProps) => {
	return (
		<div className={cn(styles.list, styles[type])}>
			{Object.values(categories).map((category) => {
				const { categoryType } = category;
				return (
					<PostCategoryCard
						key={categoryType}
						postCategory={category}
						type={postCategoryCardType}
						isActive={activeCategory?.categoryType === categoryType}
					/>
				);
			})}
		</div>
	);
};
