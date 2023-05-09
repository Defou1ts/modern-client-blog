import { configureStore, combineReducers } from '@reduxjs/toolkit';

import categoryReducer from './slices/category.slice';
import headerReducer from './slices/header.slice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	category: categoryReducer,
	header: headerReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
