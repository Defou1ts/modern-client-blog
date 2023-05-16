import styles from './index.module.scss';
import { FooterNavbar } from './ui/FooterNavbar';
import { Social } from './ui/Social';

import { SubscribeForm } from '@widgets/SubscribeForm';

export const Footer = () => {
	return (
		<footer data-test-id="footer" className={styles.footer}>
			<FooterNavbar />
			<SubscribeForm />
			<Social />
		</footer>
	);
};
