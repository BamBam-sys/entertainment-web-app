import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

export const store = configureStore({
  reducer: {
    reducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});
