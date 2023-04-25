import type { ListContentType, TextContentType, TitleContentType } from './interfaces';

export type PostCategoryType = 'business' | 'startup' | 'economy' | 'technology';

export type PostContentType = TitleContentType | TextContentType | ListContentType;

export type PostTag = 'business' | 'experience' | 'screen' | 'technology' | 'marketing' | 'life';

export type PostCategoryCardType = 'large' | 'medium';
