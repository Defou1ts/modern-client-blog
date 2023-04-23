import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { P } from '@shared/ui/P';
import { H } from '@shared/ui/H';

export const AboutOverviewHeader = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.about}>
				<p className={styles.subtitle}>{t('about.overview.subtitle')}</p>
				<H type="h1">{t('about.overview.title')}</H>
			</div>
			<div className={styles.text}>
				<P type="medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</P>
			</div>
		</div>
	);
};
