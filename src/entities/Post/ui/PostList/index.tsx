import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { PostCard } from '../PostCard';

import { H } from '@shared/ui/H';
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
				<H type="h5">{t('post.no-posts')}</H>
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
						<H type="h3">&lt; Prev</H>
					</button>

					<button
						onClick={handleNextClick}
						className={cn(styles.button, {
							[styles.disabled]: isNextDisabled,
						})}
						disabled={isNextDisabled}
					>
						<H type="h3">Next &gt;</H>
					</button>
				</div>
			)}
		</div>
	);
};
