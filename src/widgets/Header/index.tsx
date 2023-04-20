import Link from 'next/link';

import styles from './index.module.scss';
import { routes } from './lib/routes';

import { Button } from '@shared/ui/Button';

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Modsen Client Blog</h1>
			<nav className={styles.nav}>
				{routes.map(({ path, label }) => (
					<Link className={styles.navlink} href={path} key={path}>
						{label}
					</Link>
				))}
			</nav>
			<Button className={styles.video} type="secondary">
				Video about us
			</Button>
		</header>
	);
};
