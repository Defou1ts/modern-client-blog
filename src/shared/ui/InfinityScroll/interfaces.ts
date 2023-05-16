import type { ReactNode } from 'react';

export interface InfinityScrollProps {
	Wrapper: JSX.Element;
	children: ReactNode;
	customHeight?: number;
}
