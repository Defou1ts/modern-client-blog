import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';

export const AboutOverviewOurTasks = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<p className={styles.subtitle}>{t('about.overview.our-mission-subtitle')}</p>
				<H type="h3" className={styles.title}>
					{t('about.overview.our-mission-title')}
				</H>
				<P type="medium" className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
					risus viverra adipiscing at in tellus.
				</P>
			</div>
			<div className={styles.item}>
				<p className={styles.subtitle}>{t('about.overview.our-vision-subtitle')}</p>
				<H type="h3" className={styles.title}>
					{t('about.overview.our-vision-title')}
				</H>
				<P type="medium" className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
					risus viverra adipiscing at in tellus.
				</P>
			</div>
		</div>
	);
};
