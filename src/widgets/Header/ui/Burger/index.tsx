import cn from 'classnames';

import styles from './index.module.scss';

import type { BurgerProps } from './interfaces';

export const Burger = ({ onClick, isActive }: BurgerProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(styles.burger, {
				[styles.active]: isActive,
			})}
		>
			<span></span>
		</div>
	);
};