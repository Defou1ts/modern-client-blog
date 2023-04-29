import type { PostCategoryCardType } from '@entities/Post/types';
import type { PostCategory } from '../../interfaces';

export interface PostCategoriesListProps {
	categories: PostCategory[];
	type: 'horizontal' | 'vertical';
	postCategoryCardType: PostCategoryCardType;
	activeCategory?: PostCategory;
}
