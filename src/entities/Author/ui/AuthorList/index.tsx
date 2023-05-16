import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { AuthorCard } from '../AuthorCard';

import { Heading } from '@shared/ui/Heading';

import type { AuthorListProps } from './interfaces';

export const AuthorList = ({ authors }: AuthorListProps) => {
	const { t } = useTranslation();

	return (
		<section data-test-id="author-list" className={styles.wrapper}>
			<Heading type="h2" className={styles.title}>
				{t('author.list-title')}
			</Heading>
			<div className={styles.listWrapper}>
				{authors.map((author) => (
					<AuthorCard key={author.id} author={author} />
				))}
			</div>
		</section>
	);
};
