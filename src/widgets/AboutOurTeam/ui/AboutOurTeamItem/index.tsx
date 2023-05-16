import Image from 'next/image';

import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';

import type { AboutOurTeamItemProps } from './interfaces';

export const AboutOurTeamItem = ({
	reverse,
	titleLanguagePath,
	subtitle,
	desciption,
	imageSrc,
	imageAltLanguagePath,
	figure,
}: AboutOurTeamItemProps) => {
	const { t } = useTranslation();

	return (
		<div
			className={cn(styles.wrapper, {
				[styles.reverse]: reverse,
			})}
		>
			<div className={styles.info}>
				<Heading type="h2">{t(titleLanguagePath)}</Heading>
				<Heading type="h4">{subtitle}</Heading>
				<Paragraph type="medium">{desciption}</Paragraph>
			</div>
			<div className={styles.imageWrapper}>
				{figure}
				<Image src={imageSrc} alt={t(imageAltLanguagePath)} title={t(imageAltLanguagePath) ?? ''} fill />
			</div>
		</div>
	);
};
