import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { Button } from '@shared/ui/Button';
import { ROUTES } from '@shared/lib/constants/routes';

export const WhyWeStarted = () => {
	const { t } = useTranslation();

	return (
		<article data-test-id="wy-we-started" className={styles.wrapper}>
			<div className={styles.backgroundWrapper}></div>
			<div className={styles.content}>
				<p className={styles.subtitle}>{t('why-we-started.subtitle')}</p>
				<Heading type="h1" className={styles.title}>
					{t('why-we-started.title')}
				</Heading>
				<Paragraph type="medium" className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip.
				</Paragraph>
				<Link href={`${ROUTES.ABOUT}`}>
					<Button appearance="primary" className={styles.button}>
						{t('why-we-started.button')}
					</Button>
				</Link>
			</div>
		</article>
	);
};
