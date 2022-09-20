import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import historyReducer from '../feature/history.reducer';
import itemInfoReducer from '../feature/itemInfo.reducer';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    itemInfo: itemInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
