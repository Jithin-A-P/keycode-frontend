/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.3.91:5000/api' }),
  endpoints: (builder) => ({
    getCatalogs: builder.query({
      query: () => `/medias`,
    }),
    getCampaigns: builder.query({
      query: () => `/campaigns`,
    }),
    getKiosks: builder.query({
      query: () => `/kiosks`,
    }),
    getKIOSKScheduler: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetCatalogsQuery, useGetCampaignsQuery, useGetKIOSKSchedulerQuery, useGetKiosksQuery } = api;

export default api;
