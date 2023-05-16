import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';

import styles from './index.module.scss';

import { useLocale } from '@shared/lib/hooks/useLocale';
import { selectPostsBySearchTagValue } from '@app/store/selectors/category.selectors';
import { ROUTES } from '@shared/lib/constants/routes';
import { CategoryTag } from '@shared/ui/CategoryTag';

export const SearchCategoryPostsByTagResult = () => {
	const { locale } = useLocale();

	const findedPosts = useSelector(selectPostsBySearchTagValue);

	return findedPosts.length > 0 ? (
		<div className={styles.wrapper}>
			{findedPosts.map((post) => {
				const { id, title, previewImageURL, tags } = post;
				const translatedTitle = title[locale];
				return (
					<Link href={`${ROUTES.POSTS}${id}`} key={id} className={styles.searchResultItem}>
						<Image
							src={previewImageURL}
							title={translatedTitle}
							alt={translatedTitle}
							width={80}
							height={80}
						/>
						<p className={styles.info}>
							<span>{translatedTitle}</span>
							<span className={styles.tags}>
								{tags.map((tag) => (
									<CategoryTag key={tag} tagName={tag} type="small" disabled />
								))}
							</span>
						</p>
					</Link>
				);
			})}
		</div>
	) : null;
};
