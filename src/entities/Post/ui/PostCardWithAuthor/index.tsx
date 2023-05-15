import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

import { PostAuthorDateInfo } from '../PostAuthorDateInfo';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { Paragraph } from '@shared/ui/Paragraph';
import { Heading } from '@shared/ui/Heading';
import { ROUTES } from '@shared/lib/contants/routes';

import type { PostCardWithAuthorProps } from './interfaces';

export const PostCardWithAuthor = ({ post, author }: PostCardWithAuthorProps) => {
	const { locale } = useLocale();

	const { title, previewImageURL, previewText, id } = post;

	const translatedTitle = title[locale];
	const translatedPreviewText = previewText[locale];

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={previewImageURL} alt={translatedTitle} title={translatedTitle} width={405} height={318} />
			</div>
			<div className={styles.content}>
				<PostAuthorDateInfo author={author} post={post} type="purple" className={styles.additionalInfo} />
				<Heading type="h3" className={styles.title}>
					<Link href={`${ROUTES.POSTS}${id}`} className={styles.postLink}>
						{translatedTitle}
					</Link>
				</Heading>
				<Paragraph type="medium" className={styles.previewText}>
					{translatedPreviewText}
				</Paragraph>
			</div>
		</div>
	);
};
