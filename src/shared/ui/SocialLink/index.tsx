import Link from 'next/link';
import Image from 'next/image';

import { socialIcons } from './contants/socialIcons';

import type { SocialLinkProps } from './interfaces';

export const SocialLink = ({ type, path }: SocialLinkProps) => {
	const { alt, src, title } = socialIcons[type];

	return (
		<Link href={path} target="_blank">
			<Image src={src} alt={alt} title={title} />
		</Link>
	);
};
