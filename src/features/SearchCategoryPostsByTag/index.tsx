import type { ChangeEventHandler } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import { SearchCategoryPostsByTagResult } from './ui/SearchCategoryPostsByTagResult';

import { selectSearchBytagValue } from '@app/store/selectors/category.selectors';
import { setSearchTagValue } from '@app/store/slices/category.slice';

export const SearchCategoryPostsByTag = () => {
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const searchByTagValue = useSelector(selectSearchBytagValue);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		dispatch(setSearchTagValue(e.target.value));
	};

	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				type="text"
				onChange={handleChange}
				value={searchByTagValue}
				placeholder={t('category.search-placeholder') ?? ''}
			/>
			<SearchCategoryPostsByTagResult />
		</div>
	);
};
