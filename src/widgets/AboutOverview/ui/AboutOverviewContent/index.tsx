import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Paragraph } from '@shared/ui/Paragraph';
import { Heading } from '@shared/ui/Heading';
import { RectangleLine } from '@shared/ui/RectangleLine';

export const AboutOverviewContent = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.statistics}>
					<div>
						<Heading type="display">12+</Heading>
						<Paragraph type="medium">{t('about.overview.blogs-published')}</Paragraph>
					</div>
					<div>
						<Heading type="display">18K+</Heading>
						<Paragraph type="medium">{t('about.overview.views-on-finsweet')}</Paragraph>
					</div>
					<div>
						<Heading type="display">30K+</Heading>
						<Paragraph type="medium">{t('about.overview.total-active-users')}</Paragraph>
					</div>
				</div>
				<RectangleLine className={styles.rectangles} />
			</div>
			<div className={styles.content}></div>
		</div>
	);
};
