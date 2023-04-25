import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';

export const ContactInfo = () => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<H type="h6" className={styles.contact}>
				{t('contact.title')}
			</H>
			<H type="h1" className={styles.conversation}>
				{t('contact.subtitle')}
			</H>
			<P type="medium" className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim.
			</P>
		</article>
	);
};
