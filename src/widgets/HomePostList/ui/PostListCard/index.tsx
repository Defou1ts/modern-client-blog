import Link from 'next/link';

import styles from './index.module.scss';

import { useLocale } from '@shared/hooks/useLocale';
import { PostAuthorDateInfo } from '@entities/Post/ui/PostAuthorDateInfo';
import { H } from '@shared/ui/H';
import { ROUTES } from '@shared/contants/routes';

import type { PostListCardProps } from './interfaces';

export const PostListCard = ({ post, author }: PostListCardProps) => {
	const { locale } = useLocale();
	const { title, id } = post;
	const translatedTitle = title[locale];
	return (
		<div className={styles.card}>
			<PostAuthorDateInfo post={post} author={author} type="purple" />
			<Link href={`${ROUTES.POSTS}${id}`} className={styles.link}>
				<H type="h4">{translatedTitle}</H>
			</Link>
		</div>
	);
};
