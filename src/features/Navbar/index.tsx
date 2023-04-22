import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import cn from 'classnames';

import styles from './index.module.scss';

import type { NavbarProps } from './intefcaes';

export const Navbar = ({ routes }: NavbarProps) => {
	const { pathname } = useRouter();
	const { t } = useTranslation();

	return (
		<nav className={styles.nav}>
			{routes.map(({ path, translationPath: localePath }) => (
				<Link
					className={cn(styles.navlink, {
						[styles.active]: pathname === path,
					})}
					href={path}
					key={path}
				>
					{t(`header.${localePath}`)}
				</Link>
			))}
		</nav>
	);
};
