import { configureStore } from '@reduxjs/toolkit';
import opinionsReducer from './opinions-slice';
import navigationReducer from './navigation-slice';

const store = configureStore({
  reducer: {
    opinions: opinionsReducer,
    navigation: navigationReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;