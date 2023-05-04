import { useDispatch, useSelector } from 'react-redux';

import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { HeaderMenu } from './ui/HeaderMenu';

import { toggleIsOpenedMenu } from '@app/store/slices/header.slice';
import { selectIsOpenedMenu } from '@app/store/selectors/header.selectors';

export const Header = () => {
	const isOpenedMenu = useSelector(selectIsOpenedMenu);

	const dispatch = useDispatch();

	const handleToggleOpenedMenu = () => {
		dispatch(toggleIsOpenedMenu());
	};

	return (
		<header data-test-id="header" className={styles.header}>
			<Burger onClick={handleToggleOpenedMenu} isActive={isOpenedMenu} />
			<HeaderMenu />
		</header>
	);
};
