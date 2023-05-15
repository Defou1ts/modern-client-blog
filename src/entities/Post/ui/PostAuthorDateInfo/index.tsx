import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { getAuthorFullName } from '@entities/Author/lib/utils/getAuthorFullName';
import { ROUTES } from '@shared/lib/constants/routes';
import { useLocale } from '@shared/lib/hooks/useLocale';
import { Paragraph } from '@shared/ui/Paragraph';
import { getFormattedDateByLocale } from '@shared/lib/utils/getFormattedDateByLocale';

import type { PostAuthorDateInfoProps } from './interfaces';

export const PostAuthorDateInfo = ({ author, post, type, ...props }: PostAuthorDateInfoProps) => {
	const { t } = useTranslation();
	const { locale } = useLocale();

	const { content: authorContent, id: authorId } = author;
	const { name, surname } = authorContent[locale];

	const { createdAt } = post;

	return (
		<Paragraph type="medium" {...props}>
			{t('by')}{' '}
			<Link href={`${ROUTES.AUTHOR}${authorId}`} className={styles[type]}>
				{getAuthorFullName(name, surname)}
			</Link>
			{'  '}| {'  '}
			{getFormattedDateByLocale(locale, new Date(createdAt))}
		</Paragraph>
	);
};
