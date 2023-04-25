import styles from './index.module.scss';

import type { BlogPageWrapperProps } from './interfaces';

export const BlogPageWrapper = ({ children }: BlogPageWrapperProps) => <div className={styles.wrapper}>{children}</div>;
