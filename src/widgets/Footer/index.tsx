import styles from './index.module.scss';
import { FooterNavbar } from './ui/FooterNavbar';
import { Social } from './ui/Social';

import { SubscribeForm } from '@features/SubscribeForm';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<FooterNavbar />
			<SubscribeForm />
			<Social />
		</footer>
	);
};
