import type { YouTubeProps } from 'react-youtube';

export const videoOptions: YouTubeProps['opts'] = {
	height: '390',
	width: '640',
	playerVars: {
		autoplay: 1,
		iv_load_policy: 3,
		origin: process.env.NEXT_PUBLIC_APP_HOST,
		rel: 0,
	},
};
