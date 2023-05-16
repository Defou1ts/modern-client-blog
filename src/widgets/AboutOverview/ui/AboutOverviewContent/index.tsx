import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { statistics } from '../../lib/constants/statistics';

import { Paragraph } from '@shared/ui/Paragraph';
import { Heading } from '@shared/ui/Heading';
import { RectangleLine } from '@shared/ui/RectangleLine';

export const AboutOverviewContent = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.statisticsWrapper}>
					{statistics.map(({ title, descriptionLanguagePath }) => (
						<div key={descriptionLanguagePath}>
							<Heading type="display">{title}</Heading>
							<Paragraph type="medium">{t(descriptionLanguagePath)}</Paragraph>
						</div>
					))}
				</div>
				<RectangleLine className={styles.rectangles} />
			</div>
			<div className={styles.content}></div>
		</div>
	);
};
