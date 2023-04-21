import type { HTMLAttributes, ReactNode } from 'react';

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
	type: 'medium' | 'small' | 'label';
	children: ReactNode;
}
