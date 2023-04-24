import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './index.module.scss';

import { getAuthorFullName } from '../../lib/utils/getAuthorFullName';

import { H } from '@shared/ui/H';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { P } from '@shared/ui/P';
import { SocialLink } from '@shared/ui/SocialLink';

import type { AuthCardProps } from './interfaces';

export const AuthorCard = ({ author }: AuthCardProps) => {
	const { locale } = useRouter();

	const { socials, avatarURL, content, id } = author;
	const { name, surname, position, company } = content[locale ?? defaultLocale];

	const fullName = getAuthorFullName(name, surname);

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<Link href={`author/${id}`}>
					<Image src={avatarURL} width="128" height="128" alt={fullName} title={fullName} />
				</Link>
			</div>
			<div className={styles.info}>
				<Link href={`author/${id}`}>
					<H type="h3">{fullName}</H>
				</Link>
				<P type="small" className={styles.position}>
					{position} {company}
				</P>
			</div>
			<div className={styles.socials}>
				{socials.map(({ type, path }) => (
					<SocialLink key={path} type={type} path={path} />
				))}
			</div>
		</div>
	);
};
