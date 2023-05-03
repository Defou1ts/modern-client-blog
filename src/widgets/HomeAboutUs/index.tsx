import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { P } from '@shared/ui/P';
import { RectangleLine } from '@shared/ui/RectangleLine';
import { H } from '@shared/ui/H';
import { ROUTES } from '@shared/contants/routes';

export const HomeAboutUs = () => {
	const { t } = useTranslation();
	return (
		<article className={styles.wrapper}>
			<RectangleLine className={styles.rectangles} reverse />
			<div className={styles.about}>
				<div className={styles.item}>
					<p className={styles.subtitle}>{t('home.about.about-subtitle')}</p>
					<H type="h2" className={styles.title}>
						{t('home.about.about-title')}
					</H>
					<P type="medium" className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</P>
					<Link href={ROUTES.ABOUT} className={styles.link}>
						{t('home.about.read-more')}
					</Link>
				</div>
				<div className={styles.item}>
					<p className={styles.subtitle}>{t('home.about.mission-subtitle')}</p>
					<H type="h3" className={styles.title}>
						{t('home.about.mission-title')}
					</H>
					<P type="medium" className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</P>
				</div>
			</div>
		</article>
	);
};
