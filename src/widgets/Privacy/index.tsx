import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { content } from './lib/constants/content';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { getFormattedDateByLocale } from '@shared/lib/utils/getFormattedDateByLocale';

export const Privacy = () => {
	const { locale } = useLocale();
	const { t } = useTranslation();

	const updatedDate = new Date(2022, 0, 22);

	return (
		<div className={styles.privacy}>
			<section className={styles.titleWrapper}>
				<Heading type="h1" className={styles.title}>
					{t('privacy.title')}
				</Heading>
				<Paragraph type="medium" className={styles.updatedAt}>
					{t('privacy.updatedAt')} {getFormattedDateByLocale(locale, updatedDate)}
				</Paragraph>
			</section>
			<section className={styles.content}>
				{content.map(({ title, paragraphs }) => (
					<div className={styles.contentBlock} key={title}>
						<Heading type="h1" className={styles.subtitle}>
							{title}
						</Heading>
						{paragraphs.map((paragraph) => (
							<Paragraph key={paragraph} type="medium" className={styles.text}>
								{paragraph}
							</Paragraph>
						))}
					</div>
				))}
			</section>
		</div>
	);
};
