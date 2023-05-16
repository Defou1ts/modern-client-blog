import { useEffect } from 'react';

export const useGlobalScrollBlock = (flag: boolean) => {
	useEffect(() => {
		const html = document.querySelector('html');
		if (html !== null) {
			if (flag) {
				html.style.overflowY = 'hidden';
			} else {
				html.style.overflowY = 'scroll';
			}
		}
	}, [flag]);
};
