import { SubscribeForm } from '@features/SubscribeForm';

import styles from './index.module.scss';
import { FooterNavbar } from './ui/FooterNavbar';
import { Social } from './ui/Social';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<FooterNavbar />
			<SubscribeForm />
			<Social />
		</footer>
	);
};
