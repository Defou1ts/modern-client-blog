import Link from 'next/link';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { PostAuthorDateInfo } from '@entities/Post/ui/PostAuthorDateInfo';
import { Heading } from '@shared/ui/Heading';
import { ROUTES } from '@shared/lib/contants/routes';

import type { PostListCardProps } from './interfaces';

export const PostListCard = ({ post, author }: PostListCardProps) => {
	const { locale } = useLocale();
	const { title, id } = post;
	const translatedTitle = title[locale];
	return (
		<div className={styles.card}>
			<PostAuthorDateInfo post={post} author={author} type="purple" />
			<Link href={`${ROUTES.POSTS}${id}`} className={styles.link} data-test-id="home-postlist-post-link">
				<Heading type="h4">{translatedTitle}</Heading>
			</Link>
		</div>
	);
};
