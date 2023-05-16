import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './index.module.scss';

import { toggleIsOpenedMenu } from '@app/store/slices/header.slice';
import { selectIsOpenedMenu } from '@app/store/selectors/header.selectors';

export const Burger = () => {
	const isOpenedMenu = useSelector(selectIsOpenedMenu);

	const dispatch = useDispatch();

	const handleToggleOpenedMenu = () => {
		dispatch(toggleIsOpenedMenu());
	};

	return (
		<div
			data-test-id="burger"
			onClick={handleToggleOpenedMenu}
			className={cn(styles.burger, {
				[styles.active]: isOpenedMenu,
			})}
		>
			<span></span>
		</div>
	);
};
