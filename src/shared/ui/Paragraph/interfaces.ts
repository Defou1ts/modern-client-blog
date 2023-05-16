import type { HTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	type: 'medium' | 'small' | 'label';
	children: ReactNode;
}
