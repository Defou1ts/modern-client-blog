import type { PostCategory } from '@entities/Post/interfaces';
import type { PostTag } from '@entities/Post/types';

export interface CategorySidebarProps {
	activeCategory: PostCategory;
	allTags: PostTag[];
	activeTags: PostTag[];
}
