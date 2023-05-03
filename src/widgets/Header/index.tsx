import { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { routes } from './lib/constants/routes';

import { Navbar } from '@features/Navbar';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { Button } from '@shared/ui/Button';

export const Header = () => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	const { t } = useTranslation();

	const handleToggleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

	return (
		<header data-test-id="header" className={styles.header}>
			<Burger onClick={handleToggleOpenedMenu} isActive={isOpenedMenu} />
			<div
				data-test-id="menu-wrapper"
				className={cn(styles.headerWrapper, {
					[styles.active]: isOpenedMenu,
				})}
			>
				<h1 className={styles.title}>Modsen Client Blog</h1>
				<LocaleSwitcher />
				<Navbar routes={routes} />
				<Button data-test-id="header-button" appearance="secondary">
					{t('header.video')}
				</Button>
			</div>
		</header>
	);
};
