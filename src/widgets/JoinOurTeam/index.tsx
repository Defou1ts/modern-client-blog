import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { Button } from '@shared/ui/Button';
import { ROUTES } from '@shared/lib/constants/routes';

export const JoinOurTeam = () => {
	const { t } = useTranslation();

	return (
		<article data-test-id="join-our-team" className={styles.wrapper}>
			<Heading type="h2" className={styles.title}>
				{t('about.join-our-team.title')}
			</Heading>
			<Paragraph type="medium" className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</Paragraph>
			<Link href={ROUTES.CONTACT} className={styles.link}>
				<Button appearance="primary">{t('about.join-our-team.button')}</Button>
			</Link>
		</article>
	);
};
