import { useEffect } from 'react';

export const useGlobalScrollBlock = (flag: boolean) => {
	const blockScroll = () => {
		const html = document.querySelector('html');
		if (html !== null) {
			html.style.overflowY = 'hidden';
		}
	};

	const unBlockScroll = () => {
		const html = document.querySelector('html');
		if (html !== null) {
			html.style.overflowY = 'scroll';
		}
	};

	useEffect(() => {
		if (flag) {
			blockScroll();
		} else {
			unBlockScroll();
		}
	}, [flag]);
};
