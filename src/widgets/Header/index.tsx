import styles from './index.module.scss';
import { Burger } from './ui/Burger';
import { HeaderMenu } from './ui/HeaderMenu';

export const Header = () => {
	return (
		<header data-test-id="header" className={styles.header}>
			<Burger />
			<HeaderMenu />
		</header>
	);
};
