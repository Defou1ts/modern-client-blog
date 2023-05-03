import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface FeaturedPostProps {
	post: Post;
	author: AuthorWithLocales;
}
