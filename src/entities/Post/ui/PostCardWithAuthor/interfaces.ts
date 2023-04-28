import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface PostCardWithAuthorProps {
	post: Post;
	author: AuthorWithLocales;
}
