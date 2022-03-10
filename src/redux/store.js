import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './slicers/exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
});
