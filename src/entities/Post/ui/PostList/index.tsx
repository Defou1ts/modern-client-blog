import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { PostCard } from '../PostCard';

import { Heading } from '@shared/ui/Heading';
import { usePostList } from '@entities/Post/lib/hooks/usePostList';

import type { PostListProps } from './interfaces';

export const PostList = ({ posts, maxPosts }: PostListProps) => {
	const { postsToRender, handlePrevClick, handleNextClick, isPrevDisabled, isNextDisabled, needButtons } =
		usePostList(posts, maxPosts);

	const { t } = useTranslation();

	return (
		<div>
			{posts.length > 0 ? (
				<div className={styles.list}>
					{postsToRender.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</div>
			) : (
				<Heading type="h5">{t('post.no-posts')}</Heading>
			)}

			{needButtons && (
				<div className={styles.buttons}>
					<button
						onClick={handlePrevClick}
						className={cn(styles.button, {
							[styles.disabled]: isPrevDisabled,
						})}
						disabled={isPrevDisabled}
					>
						<Heading type="h3">&lt; Prev</Heading>
					</button>

					<button
						onClick={handleNextClick}
						className={cn(styles.button, {
							[styles.disabled]: isNextDisabled,
						})}
						disabled={isNextDisabled}
					>
						<Heading type="h3">Next &gt;</Heading>
					</button>
				</div>
			)}
		</div>
	);
};
