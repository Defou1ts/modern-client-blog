import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { PostCategoriesList } from '@entities/Post/ui/PostCategoriesList';

import type { BlogPostCategoriesListProps } from './interfaces';

export const BlogPostCategoriesList = ({ categories }: BlogPostCategoriesListProps) => {
	const { t } = useTranslation();

	return (
		<section>
			<Heading type="h2" className={styles.title}>
				{t('blog.post-categories-title')}
			</Heading>
			<PostCategoriesList categories={categories} type="horizontal" postCategoryCardType="large" />
		</section>
	);
};
