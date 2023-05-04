import { Children, cloneElement, useEffect, useRef, useState } from 'react';

import type { InfinityScrollProps } from './interfaces';

export const InfinityScroll = ({ Wrapper, children, customHeight = 0 }: InfinityScrollProps) => {
	const [componentsRendered, setComponentsRendered] = useState<number>(1);

	const wrapperRef = useRef<HTMLDivElement>(null);

	const isBottom = () => {
		return (
			wrapperRef.current !== null &&
			wrapperRef.current.getBoundingClientRect().bottom - customHeight <= window.innerHeight
		);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isBottom()) {
				if (!(componentsRendered > Children.count(children) - 1)) {
					setComponentsRendered(componentsRendered + 1);
				}
			}
		};
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [componentsRendered]);

	const childrenToRender = Children.map(children, (child, index) => {
		if (index + 1 <= componentsRendered) {
			return child;
		} else {
			return null;
		}
	});

	console.log('render');

	const WrapperWithRef = cloneElement(Wrapper, { ref: wrapperRef, children: childrenToRender });

	return <>{WrapperWithRef}</>;
};
