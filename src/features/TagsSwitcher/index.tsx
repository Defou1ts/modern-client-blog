import { useDispatch, useSelector } from 'react-redux';

import styles from './index.module.scss';

import { CategoryTag } from '@shared/ui/CategoryTag';
import { toggleActiveTag } from '@app/store/slices/category.slice';
import { selectActiveTags, selectAllTags } from '@app/store/selectors/category.selectors';

import type { PostTag } from '@entities/Post/types';

export const TagsSwitcher = () => {
	const tags = useSelector(selectAllTags);
	const activeTags = useSelector(selectActiveTags);

	const dispatch = useDispatch();

	const handleTagClick = (tag: PostTag) => () => {
		dispatch(toggleActiveTag(tag));
	};

	return (
		<div className={styles.wrapper}>
			{tags.map((tag) => {
				const isActive = activeTags.includes(tag);
				return (
					<CategoryTag
						onClick={handleTagClick(tag)}
						key={tag}
						tagName={tag}
						isActive={isActive}
						type="medium"
					/>
				);
			})}
		</div>
	);
};
