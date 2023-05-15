import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { logos } from './lib/constants/logos';

import { Paragraph } from '@shared/ui/Paragraph';
import { Heading } from '@shared/ui/Heading';

export const LogoList = () => {
	const { t } = useTranslation();
	return (
		<article data-test-id="logo-list" className={styles.wrapper}>
			<div className={styles.info}>
				<Paragraph type="small" className={styles.subtitle}>
					{t('home.logo-list-subtitle')}
				</Paragraph>
				<Heading type="h4" className={styles.title}>
					{t('home.logo-list-title')}
				</Heading>
			</div>
			<div className={styles.logolist}>
				{logos.map(({ src, alt, title }) => (
					<Image key={alt} src={src} alt={alt} title={title} />
				))}
			</div>
		</article>
	);
};
