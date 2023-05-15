import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';

import { Heading } from '@shared/ui/Heading';
import { PostCardWithAuthor } from '@entities/Post/ui/PostCardWithAuthor';

import type { WhatToReadNextProps } from './interfaces';

export const WhatToReadNext = ({ posts, authors }: WhatToReadNextProps) => {
	const { t } = useTranslation();

	return (
		<article className={styles.wrapper}>
			<Heading type="h2" className={styles.title}>
				{t('post.what-to-read-next')}
			</Heading>
			<div className={styles.cardsWrapper}>
				{posts.map((post, index) => (
					<PostCardWithAuthor key={post.id} post={post} author={authors[index]} />
				))}
			</div>
			<div className={styles.line}></div>
		</article>
	);
};
