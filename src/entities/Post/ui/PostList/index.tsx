import { useTranslation } from 'next-i18next';
import cn from 'classnames';

import styles from './index.module.scss';

import { PostCard } from '../PostCard';

import { H } from '@shared/ui/H';
import { usePostList } from '@entities/Post/lib/hooks/usePostList';

import type { PostListProps } from './interfaces';

export const PostList = ({ posts, maxPosts }: PostListProps) => {
	const { postsToRender, handlePrevClick, handleNextClick, isPrevDisabled, isNextDisabled } = usePostList(
		posts,
		maxPosts
	);

	const { t } = useTranslation();

	return (
		<article>
			<H type="h1">{t('post.post-list-title')}</H>
			<div className={styles.line}></div>
			<div className={styles.list}>
				{postsToRender.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
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
		</article>
	);
};
