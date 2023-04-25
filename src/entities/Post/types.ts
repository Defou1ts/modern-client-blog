import type { ListContentType, TextContentType, TitleContentType } from './interfaces';

export type PostCategory = 'business' | 'startup' | 'economy' | 'technology';

export type PostContentType = TitleContentType | TextContentType | ListContentType;
