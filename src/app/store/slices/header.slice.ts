import { createSlice } from '@reduxjs/toolkit';

export interface VideoState {
	isOpenedVideoModal: boolean;
}

const initialState: VideoState = {
	isOpenedVideoModal: false,
};

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		closeVideoModal: (state) => {
			state.isOpenedVideoModal = false;
		},
		openVideoModal: (state) => {
			state.isOpenedVideoModal = true;
		},
	},
});

export default videoSlice.reducer;
export const { closeVideoModal, openVideoModal } = videoSlice.actions;
