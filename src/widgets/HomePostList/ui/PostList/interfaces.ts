import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface PostListProps {
	posts: [Post, Post, Post, Post];
	postsAuthors: [AuthorWithLocales, AuthorWithLocales, AuthorWithLocales, AuthorWithLocales];
}
