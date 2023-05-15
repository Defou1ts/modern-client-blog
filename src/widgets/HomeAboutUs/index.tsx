import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Paragraph } from '@shared/ui/Paragraph';
import { RectangleLine } from '@shared/ui/RectangleLine';
import { Heading } from '@shared/ui/Heading';
import { ROUTES } from '@shared/lib/contants/routes';

export const HomeAboutUs = () => {
	const { t } = useTranslation();
	return (
		<article data-test-id="home-about-us" className={styles.wrapper}>
			<RectangleLine className={styles.rectangles} reverse />
			<div className={styles.about}>
				<div className={styles.item}>
					<p className={styles.subtitle}>{t('home.about.about-subtitle')}</p>
					<Heading type="h2" className={styles.title}>
						{t('home.about.about-title')}
					</Heading>
					<Paragraph type="medium" className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</Paragraph>
					<Link href={ROUTES.ABOUT} className={styles.link} data-test-id="home-about-us-link">
						{t('home.about.read-more')}
					</Link>
				</div>
				<div className={styles.item}>
					<p className={styles.subtitle}>{t('home.about.mission-subtitle')}</p>
					<Heading type="h3" className={styles.title}>
						{t('home.about.mission-title')}
					</Heading>
					<Paragraph type="medium" className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</Paragraph>
				</div>
			</div>
		</article>
	);
};
