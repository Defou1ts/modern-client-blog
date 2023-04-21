import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'secondary';
	children: ReactNode;
}
