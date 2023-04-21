import styles from './index.module.scss';

import { Header } from '@widgets/Header';

import type { LayoutProps } from './interfaces';

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>Footer</footer>
		</div>
	);
};
