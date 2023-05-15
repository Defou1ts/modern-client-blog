import Image from 'next/image';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { Heading } from '@shared/ui/Heading';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { Paragraph } from '@shared/ui/Paragraph';

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
			<Heading type="h4">{translatedDescription}</Heading>

			<div className={styles.author}>
				<div className={styles.authorImageWrapper}>
					<Image src={avatarURL} alt={authorFullName} title={authorFullName} width={48} height={48} />
				</div>
				<div>
					<Heading type="h4">{authorFullName}</Heading>
					<Paragraph type="medium" className={styles.authorLocation}>
						{location}
					</Paragraph>
				</div>
			</div>
		</div>
	);
};
