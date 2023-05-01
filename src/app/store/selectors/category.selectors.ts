import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export const selectAllTags = (state: RootState) => state.category.tags;
export const selectActiveTags = (state: RootState) => state.category.activeTags;
export const selectPosts = (state: RootState) => state.category.posts;
export const selectSearchBytagValue = (state: RootState) => state.category.searchTagValue;
export const selectPostsBySearchTagValue = createSelector(selectPosts, selectSearchBytagValue, (posts, searchTagValue) => {
	return searchTagValue === '' ? [] : posts.filter((post) => post.tags.some((tag) => tag.includes(searchTagValue)));
});
export const selectFilteredByTagPosts = createSelector(selectPosts, selectActiveTags, (posts, tags) =>
	tags.length === 0 ? posts : posts.filter((post) => post.tags.some((tag) => tags.includes(tag)))
);
