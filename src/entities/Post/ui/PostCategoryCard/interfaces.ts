import type { PostCategoryCardType } from '@entities/Post/types';
import type { PostCategory } from '@entities/Post/interfaces';

export interface PostCategoryCardProps {
	postCategory: PostCategory;
	type: PostCategoryCardType;
	isActive?: boolean;
}
