import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

import { getAuthorFullName } from '../../lib/utils/getAuthorFullName';

import { Heading } from '@shared/ui/Heading';
import { Paragraph } from '@shared/ui/Paragraph';
import { SocialLink } from '@shared/ui/SocialLink';
import { ROUTES } from '@shared/lib/constants/routes';
import { useLocale } from '@shared/lib/hooks/useLocale';

import type { AuthCardProps } from './interfaces';

export const AuthorCard = ({ author }: AuthCardProps) => {
	const { locale } = useLocale();

	const { socials, avatarURL, content, id } = author;
	const { name, surname, position, company } = content[locale];

	const fullName = getAuthorFullName(name, surname);

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<Link href={`${ROUTES.AUTHOR}${id}`}>
					<Image src={avatarURL} width="128" height="128" alt={fullName} title={fullName} />
				</Link>
			</div>
			<div className={styles.info}>
				<Link href={`${ROUTES.AUTHOR}${id}`}>
					<Heading type="h3">{fullName}</Heading>
				</Link>
				<Paragraph type="small" className={styles.position}>
					{position} {company}
				</Paragraph>
			</div>
			<div className={styles.socials}>
				{socials.map(({ type, path }) => (
					<SocialLink key={path} type={type} path={path} />
				))}
			</div>
		</div>
	);
};
