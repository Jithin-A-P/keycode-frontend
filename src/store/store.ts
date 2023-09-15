/* eslint-disable import/no-cycle */
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import api from '@services/api';
import rootReducer from './reducer';

const { reducerPath, reducer, middleware } = api;

const store = configureStore({
  reducer: {
    rootReducer,
    [reducerPath]: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

setupListeners(store.dispatch);

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
export type RootState = ReturnType<typeof store.getState>;
