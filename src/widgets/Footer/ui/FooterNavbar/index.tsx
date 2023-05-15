import styles from './index.module.scss';

import { routes } from '../../lib/constants/routes';

import { Navbar } from '@features/Navbar';
import { Logo } from '@shared/ui/Logo';

export const FooterNavbar = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
			<Navbar routes={routes} />
		</div>
	);
};
