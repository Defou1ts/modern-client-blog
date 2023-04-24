import type { SocialLinkProps } from '@shared/ui/SocialLink/interfaces';

export interface AuthorWithLocales {
	content: Record<string, AuthorContent>;
	id: number;
	socials: SocialLinkProps[];
	avatarURL: string;
}

export interface AuthorContent {
	name: string;
	surname: string;
	position: string;
	company: string;
}
