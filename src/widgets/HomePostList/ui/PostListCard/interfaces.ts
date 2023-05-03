import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface PostListCardProps {
	post: Post;
	author: AuthorWithLocales;
}
