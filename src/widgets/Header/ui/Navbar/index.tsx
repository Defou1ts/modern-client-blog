import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { routes } from '../../lib/routes';

export const Navbar = () => {
	const { t } = useTranslation();

	return (
		<nav className={styles.nav}>
			{routes.map(({ path, translationPath: localePath }) => (
				<Link className={styles.navlink} href={path} key={path}>
					{t(`header.${localePath}`)}
				</Link>
			))}
		</nav>
	);
};
