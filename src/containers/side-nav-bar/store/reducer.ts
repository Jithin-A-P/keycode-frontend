import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../../types/common';

type ProfileState = {
  user: IUser;
};

export const initialState: ProfileState = {
  user: {
    email: '',
    firstName: '',
    id: '',
    lastName: '',
  },
};

export const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    updateProfile: (state, { payload }) => {
      state.user = payload;
    },
    clearProfile: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { updateProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
