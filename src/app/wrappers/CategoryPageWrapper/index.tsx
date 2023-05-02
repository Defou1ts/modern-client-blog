import styles from './index.module.scss';

import type { CategoryPageWrapperProps } from './interfaces';

export const CategoryPageWrapper = ({ children }: CategoryPageWrapperProps) => (
	<div className={styles.wrapper}>{children}</div>
);
