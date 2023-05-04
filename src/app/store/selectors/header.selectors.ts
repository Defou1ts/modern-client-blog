import type { RootState } from '../store';

export const selectIsOpenedVideoModal = (state: RootState) => state.header.isOpenedVideoModal;
export const selectIsOpenedMenu = (state: RootState) => state.header.isOpenedMenu;
