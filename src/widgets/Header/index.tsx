import { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';

import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { routes } from './lib/constants/routes';

import { Navbar } from '@features/Navbar';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { Button } from '@shared/ui/Button';
import { openVideoModal } from '@app/store/slices/header.slice';
import { VideoModal } from '@widgets/VideoModal';

export const Header = () => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const handleToggleOpenedMenu = () => {
		setIsOpenedMenu(!isOpenedMenu);
	};

	const handleOpenVideoModal = () => {
		dispatch(openVideoModal());
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
				<Button onClick={handleOpenVideoModal} data-test-id="header-button" appearance="secondary">
					{t('header.video')}
				</Button>
				<VideoModal />
			</div>
		</header>
	);
};
