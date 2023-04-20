import { useState } from 'react';

import Link from 'next/link';

import cn from 'classnames';

import styles from './index.module.scss';
import { routes } from './lib/routes';

import { Button } from '@shared/ui/Button';

export const Header = () => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	const handleToggleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

	return (
		<header className={styles.header}>
			<div
				onClick={handleToggleOpenedMenu}
				className={cn(styles.burger, {
					[styles.active]: isOpenedMenu,
				})}
			>
				<span></span>
			</div>
			<div
				className={cn(styles.headerWrapper, {
					[styles.active]: isOpenedMenu,
				})}
			>
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
			</div>
		</header>
	);
};
