import { configureStore } from '@reduxjs/toolkit';
import opinionsReducer from './opinions-slice';

const store = configureStore({
  reducer: {
    opinions: opinionsReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;