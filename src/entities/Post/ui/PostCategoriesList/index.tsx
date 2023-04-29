import cn from 'classnames';

import styles from './index.module.scss';

import { PostCategoryCard } from '@entities/Post/ui/PostCategoryCard';

import type { PostCategoriesListProps } from './interfaces';

export const PostCategoriesList = ({ categories, type, postCategoryCardType }: PostCategoriesListProps) => {
	return (
		<div className={cn(styles.list, styles[type])}>
			{Object.values(categories).map((category) => (
				<PostCategoryCard key={category.category} postCategory={category} type={postCategoryCardType} />
			))}
		</div>
	);
};
