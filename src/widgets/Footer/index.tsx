import cn from 'classnames';

import styles from './index.module.scss';
import { FooterNavbar } from './ui/FooterNavbar';
import { SubscribeForm } from './ui/SubscribeForm';
import { Social } from './ui/Social';

import type { FooterProps } from './interfaces';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<FooterNavbar />
			<SubscribeForm />
			<Social />
		</footer>
	);
};
