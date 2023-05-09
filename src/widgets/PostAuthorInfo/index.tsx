import Image from 'next/image';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { H } from '@shared/ui/H';
import { P } from '@shared/ui/P';
import { getFormattedDateByLocale } from '@shared/lib/utils/getFormattedDateByLocale';
import { allPostCategories } from '@entities/Post/lib/mock/allPostCategories';
import { ROUTES } from '@shared/lib/contants/routes';

import type { PostAuthorInfoProps } from './interfaces';

export const PostAuthorInfo = ({ post, author }: PostAuthorInfoProps) => {
	const { locale } = useLocale();
	const { t } = useTranslation();

	const { createdAt, title, category } = post;

	const translatedTitle = title[locale];

	const { icon: categoryIcon, title: categoryTitle } = allPostCategories[category];
	const translatedCategoryTitle = categoryTitle[locale];

	const { avatarURL, content, id } = author;
	const { name, surname } = content[locale];

	const authorFullName = getAuthorFullName(name, surname);

	return (
		<article className={styles.wrapper}>
			<div className={styles.infoWrapper}>
				<div className={styles.author}>
					<div className={styles.authorIconWrapper}>
						<Image src={avatarURL} alt={authorFullName} title={authorFullName} width={48} height={48} />
					</div>
					<div className={styles.info}>
						<Link href={`${ROUTES.AUTHOR}${id}`} className={styles.authorLink}>
							<H type="h3">{authorFullName}</H>
						</Link>
						<P type="medium" className={styles.createdAt}>
							{t('post.posted')} {getFormattedDateByLocale(locale, new Date(createdAt))}
						</P>
					</div>
				</div>
				<H type="h1">{translatedTitle}</H>
				<div className={styles.category}>
					<Image
						className={styles.categoryImage}
						src={categoryIcon}
						alt={translatedCategoryTitle}
						title={translatedCategoryTitle}
						width={24}
						height={24}
					/>
					<H type="h4">{translatedCategoryTitle}</H>
				</div>
			</div>
		</article>
	);
};
