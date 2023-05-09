import styles from './index.module.scss';

import type { PostPageWrapperProps } from './interfaces';

export const PostPageWrapper = ({ children }: PostPageWrapperProps) => <div className={styles.wrapper}>{children}</div>;
