import Image from 'next/image';

import styles from './index.module.scss';

import { useLocale } from '@shared/hooks/useLocale';
import { H } from '@shared/ui/H';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { P } from '@shared/ui/P';

import type { TestimonalsCarouselCardProps } from './interfaces';

export const TestimonalsCarouselCard = ({ testimonal }: TestimonalsCarouselCardProps) => {
	const { locale } = useLocale();

	const { description, author } = testimonal;
	const { content, avatarURL } = author;

	const { name, surname, location } = content[locale];
	const translatedDescription = description[locale];

	const authorFullName = getAuthorFullName(name, surname);

	return (
		<div className={styles.wrapper}>
			<H type="h4">{translatedDescription}</H>

			<div className={styles.author}>
				<div className={styles.authorImageWrapper}>
					<Image src={avatarURL} alt={authorFullName} title={authorFullName} width={48} height={48} />
				</div>
				<div>
					<H type="h4">{authorFullName}</H>
					<P type="medium" className={styles.authorLocation}>
						{location}
					</P>
				</div>
			</div>
		</div>
	);
};
