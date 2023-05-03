import type { AuthorWithLocales } from '@entities/Author/interfaces';

export interface Testimonal {
	description: Record<string, string>;
	author: AuthorWithLocales;
}
