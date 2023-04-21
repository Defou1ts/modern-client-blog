import { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { LocalesList } from './ui/LocalesList';
import { routes } from './lib/routes';

import { Button } from '@shared/ui/Button';
import { Navbar } from '@shared/ui/Navbar';

import type { HeaderProps } from './interfaces';

export const Header = ({ className, ...props }: HeaderProps) => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);

	const { t } = useTranslation();

	const handleToggleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

	return (
		<header className={cn(styles.header, className)} {...props}>
			<Burger onClick={handleToggleOpenedMenu} isActive={isOpenedMenu} />
			<div
				className={cn(styles.headerWrapper, {
					[styles.active]: isOpenedMenu,
				})}
			>
				<h1 className={styles.title}>Modsen Client Blog</h1>
				<LocalesList />
				<Navbar routes={routes} />
				<Button type="secondary">{t('header.video')}</Button>
			</div>
		</header>
	);
};
