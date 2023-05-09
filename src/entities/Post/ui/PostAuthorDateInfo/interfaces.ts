import type { HTMLAttributes } from 'react';

import type { AuthorWithLocales } from '@entities/Author/interfaces';
import type { Post } from '@entities/Post/interfaces';

export interface PostAuthorDateInfoProps extends HTMLAttributes<HTMLParagraphElement> {
	author: AuthorWithLocales;
	post: Post;
	type: 'yellow' | 'purple';
}
