import styles from './index.module.scss';

import type { HomePageWrapperProps } from './interfaces';

export const HomePageWrapper = ({ children }: HomePageWrapperProps) => <div className={styles.wrapper}>{children}</div>;
