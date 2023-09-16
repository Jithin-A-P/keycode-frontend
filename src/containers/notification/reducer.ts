import { createSlice } from '@reduxjs/toolkit';

import { NotificationType } from './types';

const initialState: {
  notifications: NotificationType[];
  data: any;
} = {
  notifications: [],
  data: {},
};

export const notificationsReducerSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotifier: (state, { payload }) => {
      const id = Math.random();
      state.notifications = [
        ...state.notifications,
        { message: payload.message, type: payload.type, id },
      ];
    },
    hideNotifier: (state, { payload }) => {
      const notificationsArray = state.notifications.filter(
        (item) => item.id !== payload
      );
      state.notifications = [...notificationsArray];
    },
    storeData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { showNotifier, hideNotifier, storeData } = notificationsReducerSlice.actions;

export default notificationsReducerSlice.reducer;
