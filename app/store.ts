import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import peopleReducer from '../components/features/peopleSlicer';
import favouriteReducer from '../components/features/favouriteSlicer';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    favourite: favouriteReducer
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
