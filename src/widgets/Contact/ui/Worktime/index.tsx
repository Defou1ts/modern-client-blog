import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { P } from '@shared/ui/P';
import { H } from '@shared/ui/H';

export const WorkTime = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div>
				<P type="small" className={styles.itemTitle}>
					{t('contact.working.title-days')}
				</P>
				<div className={styles.line}></div>
				<H type="h5" className={styles.info}>
					{t('contact.working.days')} <br /> {t('contact.working.hours')}{' '}
				</H>
				<P type="medium" className={styles.support}>
					{t('contact.working.availability')}
				</P>
			</div>
			<div>
				<P type="small" className={styles.itemTitle}>
					{t('contact.working.title-contact')}
				</P>
				<div className={styles.line}></div>
				<H type="h5" className={styles.info}>
					020 7993 2905
				</H>
				<P type="medium" className={styles.support}>
					hello@finsweet.com
				</P>
			</div>
		</div>
	);
};
