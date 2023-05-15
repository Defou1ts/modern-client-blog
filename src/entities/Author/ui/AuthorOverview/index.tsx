import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { SocialLink } from '@shared/ui/SocialLink';
import { RectangleLine } from '@shared/ui/RectangleLine';
import { useLocale } from '@shared/lib/hooks/useLocale';

import type { AuthorOverviewProps } from './interfaces';

export const AuthorOverview = ({ author }: AuthorOverviewProps) => {
	const { locale } = useLocale();

	const { t } = useTranslation();

	const { content, socials, avatarURL } = author;

	const { name, surname, description } = content[locale];

	const authorFullName = getAuthorFullName(name, surname);

	return (
		<article className={styles.wrapper}>
			<div className={styles.overview}>
				<div className={styles.imageWrapper}>
					<Image src={avatarURL} alt={authorFullName} title={authorFullName} width="250" height="300" />
				</div>
				<div className={styles.content}>
					<Heading type="h1" className={styles.title}>
						{t('author.welcome-part-first')} {authorFullName} {t('author.welcome-part-second')}
					</Heading>
					<Paragraph type="medium" className={styles.description}>
						{description}
					</Paragraph>
					<div className={styles.socials}>
						{socials.map(({ type, path }) => (
							<SocialLink key={path} type={type} path={path} />
						))}
					</div>
				</div>
			</div>
			<RectangleLine reverse className={styles.rectangle} />
		</article>
	);
};
