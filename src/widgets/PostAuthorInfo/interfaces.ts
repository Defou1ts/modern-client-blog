import type { Post } from '@entities/Post/interfaces';
import type { AuthorWithLocales } from '@entities/Author/interfaces';

export interface PostAuthorInfoProps {
	author: AuthorWithLocales;
	post: Post;
}
