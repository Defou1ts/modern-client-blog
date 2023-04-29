import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface WhatToReadNextProps {
	posts: [Post, Post, Post];
	authors: [AuthorWithLocales, AuthorWithLocales, AuthorWithLocales];
}
