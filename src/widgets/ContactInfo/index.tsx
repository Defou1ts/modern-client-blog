import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';

export const ContactInfo = () => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<Heading type="h6" className={styles.contact}>
				{t('contact.title')}
			</Heading>
			<Heading type="h1" className={styles.conversation}>
				{t('contact.subtitle')}
			</Heading>
			<Paragraph type="medium" className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim.
			</Paragraph>
		</article>
	);
};
