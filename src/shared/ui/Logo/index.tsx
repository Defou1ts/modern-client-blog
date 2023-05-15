import Link from 'next/link';

import styles from './index.module.scss';

import { ROUTES } from '@shared/lib/constants/routes';

export const Logo = () => {
	return (
		<Link href={ROUTES.HOME}>
			<h1 className={styles.logo}>Modsen Client Blog</h1>
		</Link>
	);
};
