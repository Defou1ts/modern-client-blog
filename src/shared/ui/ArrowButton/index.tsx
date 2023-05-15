import cn from 'classnames';

import styles from './index.module.scss';

import ArrowLeftIcon from '@app/assets/icons/arrow-left.svg';

import type { ArrowButtonProps } from './interfaces';

export const ArrowButton = ({ onClick, type }: ArrowButtonProps) => {
	return (
		<button className={cn(styles.button, styles[type])} onClick={onClick}>
			<ArrowLeftIcon alt={type} title={type} />
		</button>
	);
};
