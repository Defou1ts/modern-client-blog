import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import type { PortalProps } from './interfaces';

export const Portal = ({ children }: PortalProps) => {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return domLoaded ? createPortal(children, document.body) : null;
};
