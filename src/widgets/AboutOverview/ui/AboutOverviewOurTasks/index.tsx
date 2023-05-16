import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { ourTasks } from '@widgets/AboutOverview/lib/constants/ourTasks';

export const AboutOverviewOurTasks = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			{ourTasks.map(({ titleLanguagePath, subtitleLanguagePath, text }) => (
				<div key={titleLanguagePath} className={styles.item}>
					<p className={styles.subtitle}>{t(subtitleLanguagePath)}</p>
					<Heading type="h3" className={styles.title}>
						{t(titleLanguagePath)}
					</Heading>
					<Paragraph type="medium" className={styles.text}>
						{text}
					</Paragraph>
				</div>
			))}
		</div>
	);
};
