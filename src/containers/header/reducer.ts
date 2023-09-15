import { createSlice } from '@reduxjs/toolkit';

import { BreadcrumbState, IPageDescription } from './type';

const initialState: BreadcrumbState = { pages: [] };

export const breadcrumbSlice = createSlice({
  name: 'Breadcrumbs',
  initialState,
  reducers: {
    updateBreadcrumbs: (
      state,
      { payload }: { payload: IPageDescription[] }
    ) => {
      state.pages = payload;
    },
    clearBreadcrumbs: (state) => {
      state.pages = initialState.pages;
    },
  },
});

export const { updateBreadcrumbs, clearBreadcrumbs } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
