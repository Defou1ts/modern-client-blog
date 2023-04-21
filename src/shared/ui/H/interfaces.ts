import type { HTMLAttributes, ReactNode } from 'react';

export interface HProps extends HTMLAttributes<HTMLHeadingElement> {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display';
	children: ReactNode;
}
