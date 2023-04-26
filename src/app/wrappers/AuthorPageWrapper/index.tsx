import styles from './index.module.scss';

import type { AuthorPageWrapperProps } from './interfaces';

export const AuthorPageWrapper = ({ children }: AuthorPageWrapperProps) => (
	<div className={styles.wrapper}>{children}</div>
);
