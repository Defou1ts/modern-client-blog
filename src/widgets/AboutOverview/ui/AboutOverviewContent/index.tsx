import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { P } from '@shared/ui/P';
import { H } from '@shared/ui/H';

export const AboutOverviewContent = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.statistics}>
					<div>
						<H type="display">12+</H>
						<P type="medium">{t('about.overview.blogs-published')}</P>
					</div>
					<div>
						<H type="display">18K+</H>
						<P type="medium">{t('about.overview.views-on-finsweet')}</P>
					</div>
					<div>
						<H type="display">30K+</H>
						<P type="medium">{t('about.overview.total-active-users')}</P>
					</div>
				</div>
				<div className={styles.rectangles}>
					<div className={styles.purpleRectangle}></div>
					<div className={styles.yellowRectangle}></div>
				</div>
			</div>
			<div className={styles.content}></div>
		</div>
	);
};
