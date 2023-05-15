import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';

export const AboutOurTeam = () => {
	const { t } = useTranslation();

	return (
		<section>
			<div className={styles.itemWrapper}>
				<div className={styles.info}>
					<Heading type="h2">{t('about.our-team.our-team-title')}</Heading>
					<Heading type="h4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
					</Heading>
					<Paragraph type="medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat.
					</Paragraph>
				</div>
				<div className={styles.imageWrapper}>
					<div className={styles.rectangle}></div>
					<Image
						src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt={t('about.our-team.our-team-image-alt')}
						title={t('about.our-team.our-team-image-alt') ?? ''}
						fill
					/>
				</div>
			</div>
			<div className={styles.itemWrapper}>
				<div className={styles.imageWrapper}>
					<div className={styles.circle}></div>
					<Image
						src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt={t('about.our-team.why-we-started-image-alt')}
						title={t('about.our-team.why-we-started-image-alt') ?? ''}
						fill
					/>
				</div>

				<div className={styles.info}>
					<Heading type="h2">{t('about.our-team.why-we-started-title')}</Heading>
					<Heading type="h4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
					</Heading>
					<Paragraph type="medium">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat.
					</Paragraph>
				</div>
			</div>
		</section>
	);
};
