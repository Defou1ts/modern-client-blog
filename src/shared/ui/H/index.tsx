import cn from 'classnames';

import styles from './index.module.scss';

import type { HProps } from './interfaces';

export const H = ({ type, children, className, ...props }: HProps) => {
	const HTag = type === 'display' ? 'h1' : type;

	return (
		<HTag className={cn(styles.h, styles[type], className)} {...props}>
			{children}
		</HTag>
	);
};
