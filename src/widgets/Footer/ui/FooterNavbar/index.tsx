import styles from './index.module.scss';

import { routes } from '../../lib/constants/routes';

import { Navbar } from '@features/Navbar';

export const FooterNavbar = () => {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.title}>Modsen Client Blog</h1>
			<Navbar routes={routes} />
		</div>
	);
};
