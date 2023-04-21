import { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { LocalesList } from './ui/LocalesList';
import { Navbar } from './ui/Navbar';

import { Button } from '@shared/ui/Button';

export const Header = () => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	const { t } = useTranslation();

	const handleToggleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

	return (
		<header className={styles.header}>
			<Burger onClick={handleToggleOpenedMenu} isActive={isOpenedMenu} />
			<div
				className={cn(styles.headerWrapper, {
					[styles.active]: isOpenedMenu,
				})}
			>
				<h1 className={styles.title}>Modsen Client Blog</h1>
				<LocalesList />
				<Navbar />
				<Button type="secondary">{t('header.video')}</Button>
			</div>
		</header>
	);
};
