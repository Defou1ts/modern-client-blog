import type { StaticImageData } from 'next/image';
import type { PostCategoryType, PostContentType, PostTag } from './types';

export interface Post {
	id: number;
	authorId: number;
	previewImageURL: string;
	title: Record<string, string>;
	category: PostCategoryType;
	previewText: Record<string, string>;
	content: Record<string, PostContentType[]>;
	createdAt: number;
	tags: PostTag[];
}

export interface PostCategory {
	categoryType: PostCategoryType;
	icon: StaticImageData;
	title: Record<string, string>;
	description: Record<string, string>;
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
