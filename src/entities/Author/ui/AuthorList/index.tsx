import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { AuthorCard } from '../AuthorCard';

import { H } from '@shared/ui/H';

import type { AuthorListProps } from './interfaces';

export const AuthorList = ({ authors }: AuthorListProps) => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			<H type="h2" className={styles.title}>{t('author.list-title')}</H>
			<div className={styles.listWrapper}>
				{authors.map((author) => (
					<AuthorCard key={author.id} author={author} />
				))}
			</div>
		</div>
	);
};
