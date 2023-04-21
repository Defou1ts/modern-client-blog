import cn from 'classnames';

import styles from './index.module.scss';

import type { ButtonProps } from './interfaces';

export const Button = ({ appearance: type, className, children, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles.primary]: type === 'primary',
					[styles.secondary]: type === 'secondary',
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};
