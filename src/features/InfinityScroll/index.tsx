import { Children, cloneElement, useEffect, useRef, useState } from 'react';

import type { InfinityScrollProps } from './interfaces';

export const InfinityScroll = ({ Wrapper, children, customHeight = 0 }: InfinityScrollProps) => {
	const [componentsRendered, setComponentsRendered] = useState<number>(1);

	const wrapperRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (wrapperRef.current !== null) {
				const isBottom = wrapperRef.current.getBoundingClientRect().bottom - customHeight <= window.innerHeight;
				const isAllRendered = componentsRendered > Children.count(children) - 1;

				if (isBottom && !isAllRendered) {
					setComponentsRendered(componentsRendered + 1);
				}
			}
		};

		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [componentsRendered, customHeight, children]);

	const childrenToRender = Children.map(children, (child, index) => {
		if (index + 1 <= componentsRendered) {
			return child;
		} else {
			return null;
		}
	});

	const WrapperWithRef = cloneElement(Wrapper, { ref: wrapperRef, children: childrenToRender });

	return <>{WrapperWithRef}</>;
};
