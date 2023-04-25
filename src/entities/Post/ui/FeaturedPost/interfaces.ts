import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '../../interfaces';

export interface FeaturedPostProps {
	post: Post;
	author: AuthorWithLocales;
}
