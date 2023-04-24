import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

import { getAuthorFullName } from '../../lib/utils/getAuthorFullName';

import { H } from '@shared/ui/H';
import { defaultLocale } from '@shared/contants/defaultLocale';
import { P } from '@shared/ui/P';
import { SocialLink } from '@shared/ui/SocialLink';

import type { AuthCardProps } from './interfaces';

export const AuthorCard = ({ author }: AuthCardProps) => {
	const { locale, push } = useRouter();

	const { socials, avatarURL, content, id } = author;
	const { name, surname, position, company } = content[locale ?? defaultLocale];

	const fullName = getAuthorFullName(name, surname);

	const handleClickOnAuthor = async () => {
		void push(`author/${id}`);
	};

	return (
		<div onClick={handleClickOnAuthor} className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<Image src={avatarURL} width="128" height="128" alt={fullName} title={fullName} />
			</div>
			<div className={styles.info}>
				<H type="h3">{fullName}</H>
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
