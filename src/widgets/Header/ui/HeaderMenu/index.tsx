import { useCallback, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './index.module.scss';

import { closeMenu, openVideoModal } from '@app/store/slices/header.slice';
import { selectIsOpenedMenu } from '@app/store/selectors/header.selectors';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { Navbar } from '@features/Navbar';
import { Button } from '@shared/ui/Button';
import { routes } from '@widgets/Footer/lib/constants/routes';
import { VideoModal } from '@widgets/VideoModal';
import { useGlobalScrollBlock } from '@shared/hooks/useGlobalScrollBlock';
import { ROUTES } from '@shared/contants/routes';

export const HeaderMenu = () => {
	const isOpenedMenu = useSelector(selectIsOpenedMenu);

	useGlobalScrollBlock(isOpenedMenu);

	const { pathname } = useRouter();

	const dispatch = useDispatch();

	const { t } = useTranslation();

	const handleCloseMenu = useCallback(() => {
		dispatch(closeMenu());
	}, [dispatch]);

	const handleOpenVideoModal = () => {
		dispatch(openVideoModal());
		handleCloseMenu();
	};

	useEffect(() => {
		handleCloseMenu();
	}, [pathname, dispatch, handleCloseMenu]);

	return (
		<div
			data-test-id="menu-wrapper"
			className={cn(styles.menuWrapper, {
				[styles.active]: isOpenedMenu,
			})}
		>
			<Link href={ROUTES.HOME}>
				<h1 className={styles.title}>Modsen Client Blog</h1>
			</Link>
			<LocaleSwitcher />
			<Navbar routes={routes} />
			<Button onClick={handleOpenVideoModal} data-test-id="header-button" appearance="secondary">
				{t('header.video')}
			</Button>
			<VideoModal />
		</div>
	);
};