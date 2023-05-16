import { useEffect, useState } from 'react';

import { breakpoints } from '@shared/lib/constants/breakpoints';

const { lx, lg, md, sm } = breakpoints;

export const useBreakpoints = () => {
	const [windowWidth, setWindowWidth] = useState(1920);

	const handleResize = () => {
		const { innerWidth } = window;
		setWindowWidth(innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		isLx: windowWidth < lx,
		isLg: windowWidth < lg,
		isMd: windowWidth < md,
		isSm: windowWidth < sm,
	};
};
