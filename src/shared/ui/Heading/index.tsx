import cn from 'classnames';

import styles from './index.module.scss';

import type { HeadingProps } from './interfaces';

export const Heading = ({ type, children, className, ...props }: HeadingProps) => {
	const HTag = type === 'display' ? 'h1' : type;

	return (
		<HTag className={cn(styles.h, styles[type], className)} {...props}>
			{children}
		</HTag>
	);
};
