import styles from './index.module.scss';

import { PostListCard } from '../PostListCard';

import type { PostListProps } from './interfaces';

export const PostList = ({ posts, postsAuthors }: PostListProps) => {
	return (
		<div className={styles.wrapper}>
			{posts.map((post, index) => {
				const author = postsAuthors[index];
				return <PostListCard key={post.id} author={author} post={post} />;
			})}
		</div>
	);
};
