import cn from 'classnames';

import styles from './index.module.scss';

import type { ParagraphProps } from './interfaces';

export const Paragraph = ({ type, children, className, ...props }: ParagraphProps) => {
	return (
		<p className={cn(styles.p, styles[type], className)} {...props}>
			{children}
		</p>
	);
};
