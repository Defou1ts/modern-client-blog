import type { HTMLAttributes } from 'react';

export interface RectangleLineProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	reverse?: boolean;
}
