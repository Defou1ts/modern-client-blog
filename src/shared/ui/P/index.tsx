import cn from 'classnames';

import styles from './index.module.scss';

import type { PProps } from './interfaces';

export const P = ({ type, children, className, ...props }: PProps) => {
	return (
		<p className={cn(styles.p, styles[type], className)} {...props}>
			{children}
		</p>
	);
};
