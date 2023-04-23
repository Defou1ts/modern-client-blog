import styles from './index.module.scss';

import type { AboutPageWrapperProps } from './interfaces';

export const AboutPageWrapper = ({ children }: AboutPageWrapperProps) => (
	<div className={styles.wrapper}>{children}</div>
);
