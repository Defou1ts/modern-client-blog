import styles from './index.module.scss';

import type { ContactPageWrapperProps } from './interfaces';

export const ContactPageWrapper = ({ children }: ContactPageWrapperProps) => (
	<div className={styles.wrapper}>{children}</div>
);
