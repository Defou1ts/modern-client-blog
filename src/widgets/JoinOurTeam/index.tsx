import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { Button } from '@shared/ui/Button';

export const JoinOurTeam = () => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<H type="h2" className={styles.title}>
				{t('about.join-our-team.title')}
			</H>
			<P type="medium" className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</P>
			<Link href={'/contact'} className={styles.link}>
				<Button appearance="primary">{t('about.join-our-team.button')}</Button>
			</Link>
		</article>
	);
};
