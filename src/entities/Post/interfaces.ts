import type { PostCategory, PostContentType } from './types';

export interface Post {
	id: number;
	authorId: number;
	previewImageURL: string;
	title: Record<string, string>;
	category: PostCategory;
	previewText: Record<string, string>;
	content: Record<string, PostContentType[]>;
	createdAt: number;
}

export class TitleContentType {
	title: string;
}

export class TextContentType {
	text: string;
}

export class ListContentType {
	li: string[];
}
