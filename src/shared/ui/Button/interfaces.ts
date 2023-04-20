import type { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type: 'primary' | 'secondary';
	children: ReactNode;
}
