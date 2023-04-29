import cn from 'classnames';

import styles from './index.module.scss';

import type { CategoryTagProps } from './interfaces';

export const CategoryTag = ({ tagName, isActive }: CategoryTagProps) => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.active]: isActive,
			})}
		>
			{tagName}
		</div>
	);
};
