import type { StaticImageData } from 'next/image';

export interface Image {
	alt: string;
	src: StaticImageData;
	title: string;
}
