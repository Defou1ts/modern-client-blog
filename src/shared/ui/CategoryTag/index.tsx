import cn from 'classnames';

import styles from './index.module.scss';

import type { CategoryTagProps } from './interfaces';

export const CategoryTag = ({ tagName, isActive, onClick, type, disabled }: CategoryTagProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(styles.tag, styles[type], {
				[styles.active]: isActive,
				[styles.disabled]: disabled,
			})}
		>
			<div className={styles.label}>
				<span>{tagName}</span>
			</div>
		</div>
	);
};
