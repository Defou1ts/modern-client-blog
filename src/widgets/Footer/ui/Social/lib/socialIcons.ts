import FacebookIcon from '@app/assets/icons/facebook.png';
import InstagramIcon from '@app/assets/icons/instagram.png';
import TwitterIcon from '@app/assets/icons/twitter.png';
import LinkedinIcon from '@app/assets/icons/linkedin.png';

import type { Image } from '@shared/interfaces/image';

interface SocialImage extends Image {
	path: string;
}

export const socialIcons: SocialImage[] = [
	{
		alt: 'Facebook',
		src: FacebookIcon,
		title: 'Facebook',
		path: 'https://facebook.com/ModsenSoftware/',
	},
	{
		alt: 'Twitter',
		src: TwitterIcon,
		title: 'Twitter',
		path: 'https://twitter.com/modsencompany',
	},
	{
		alt: 'Instagram',
		src: InstagramIcon,
		title: 'Instagram',
		path: 'https://www.instagram.com/modsencompany/',
	},
	{
		alt: 'Linkedin',
		src: LinkedinIcon,
		title: 'Linkedin',
		path: 'https://linkedin.com/company/modsen',
	},
];
