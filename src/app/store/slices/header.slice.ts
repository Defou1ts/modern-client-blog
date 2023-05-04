import { createSlice } from '@reduxjs/toolkit';

export interface VideoState {
	isOpenedVideoModal: boolean;
	isOpenedMenu: boolean;
}

const initialState: VideoState = {
	isOpenedVideoModal: false,
	isOpenedMenu: false,
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
		toggleIsOpenedMenu: (state) => {
			state.isOpenedMenu = !state.isOpenedMenu;
		},
	},
});

export default videoSlice.reducer;
export const { closeVideoModal, openVideoModal, toggleIsOpenedMenu } = videoSlice.actions;
