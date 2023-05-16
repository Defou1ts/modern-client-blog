import type { MouseEventHandler } from 'react';

export interface ArrowButtonProps {
	type: 'left' | 'right';
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
