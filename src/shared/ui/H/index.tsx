import cn from 'classnames';

import styles from './index.module.scss';

import type { HProps } from './interfaces';

export const H = ({ type, children, className, ...props }: HProps) => {
	switch (type) {
		case 'display':
		case 'h1':
			return (
				<h1 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h4>
			);
		case 'h5':
			return (
				<h5 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h5>
			);
		case 'h6':
			return (
				<h6 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h6>
			);
		default:
			return (
				<h1 className={cn(styles.h, styles[type], className)} {...props}>
					{children}
				</h1>
			);
	}
};
