import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Paragraph } from '@shared/ui/Paragraph';
import { Heading } from '@shared/ui/Heading';

export const ContactWorkTime = () => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<div>
				<Paragraph type="small" className={styles.itemTitle}>
					{t('contact.working.title-days')}
				</Paragraph>
				<div className={styles.line}></div>
				<Heading type="h5" className={styles.info}>
					{t('contact.working.days')} <br /> {t('contact.working.hours')}{' '}
				</Heading>
				<Paragraph type="medium" className={styles.support}>
					{t('contact.working.availability')}
				</Paragraph>
			</div>
			<div>
				<Paragraph type="small" className={styles.itemTitle}>
					{t('contact.working.title-contact')}
				</Paragraph>
				<div className={styles.line}></div>
				<Heading type="h5" className={styles.info}>
					020 7993 2905
				</Heading>
				<Paragraph type="medium" className={styles.support}>
					hello@finsweet.com
				</Paragraph>
			</div>
		</article>
	);
};
