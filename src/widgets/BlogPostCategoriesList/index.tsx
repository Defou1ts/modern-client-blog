import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { H } from '@shared/ui/H';
import { PostCategoriesList } from '@entities/Post/ui/PostCategoriesList';

import type { BlogPostCategoriesListProps } from './interfaces';

export const BlogPostCategoriesList = ({ categories }: BlogPostCategoriesListProps) => {
	const { t } = useTranslation();

	return (
		<article>
			<H type="h2" className={styles.title}>
				{t('blog.post-categories-title')}
			</H>
			<PostCategoriesList categories={categories} type="horizontal" postCategoryCardType="large" />
		</article>
	);
};
