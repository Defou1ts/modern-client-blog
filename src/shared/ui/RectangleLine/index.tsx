import cn from 'classnames';

import styles from './index.module.scss';

import type { RectangleLineProps } from './interfaces';

export const RectangleLine = ({ className, reverse, ...props }: RectangleLineProps) => (
	<div
		className={cn(
			styles.rectangles,
			{
				[styles.reverse]: reverse,
			},
			className
		)}
		{...props}
	>
		<div className={styles.purpleRectangle}></div>
		<div className={styles.yellowRectangle}></div>
	</div>
);
