import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import cn from 'classnames';

import styles from './index.module.scss';

import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { ROUTES } from '@shared/contants/routes';
import { useLocale } from '@shared/hooks/useLocale';
import { P } from '@shared/ui/P';
import { getFormattedDateByLocale } from '@shared/utils/getFormattedDateByLocale';

import type { PostAuthorDateInfoProps } from './interfaces';

export const PostAuthorDateInfo = ({ author, post, type, className, ...props }: PostAuthorDateInfoProps) => {
	const { t } = useTranslation();
	const { locale } = useLocale();

	const { content: authorContent, id: authorId } = author;
	const { name, surname } = authorContent[locale];

	const { createdAt } = post;

	return (
		<P type="medium" className={cn(styles.author, className)} {...props}>
			{t('by')}{' '}
			<Link href={`${ROUTES.AUTHOR}${authorId}`} className={styles[type]}>
				{getAuthorFullName(name, surname)}
			</Link>
			{'  '}| {'  '}
			{getFormattedDateByLocale(locale, new Date(createdAt))}
		</P>
	);
};
