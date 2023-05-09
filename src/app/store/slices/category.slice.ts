import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '@entities/Post/interfaces';
import type { PostTag } from '@entities/Post/types';

export interface CategoryState {
	tags: PostTag[];
	activeTags: PostTag[];
	posts: Post[];
	searchTagValue: string;
}

const initialState: CategoryState = {
	tags: [],
	activeTags: [],
	posts: [],
	searchTagValue: '',
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		toggleActiveTag: (state, action: PayloadAction<PostTag>) => {
			if (state.activeTags.includes(action.payload)) {
				state.activeTags = state.activeTags.filter((activeTag) => activeTag !== action.payload);
			} else {
				state.activeTags.push(action.payload);
			}
		},
		setPosts: (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload;
		},
		setTags: (state, action: PayloadAction<PostTag[]>) => {
			state.tags = action.payload;
		},
		setSearchTagValue: (state, action: PayloadAction<string>) => {
			state.searchTagValue = action.payload;
		},
	},
});

export default categorySlice.reducer;
export const { toggleActiveTag, setPosts, setTags, setSearchTagValue } = categorySlice.actions;
