/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getCatalogs: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getCampaigns: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getCampaignById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),

    getKioskById: builder.query({
      query: (id) => `kiosks/${id}`,
    }),
    getKioskQueueById: builder.query({
      query: (id) => `kiosks/${id}/queue`,
    }),
    pushToKioskQueueById: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `kiosks/${id}/queue/add`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetCatalogsQuery,
  useLazyGetCatalogsQuery,
  useGetCampaignsQuery,
  useGetCampaignByIdQuery,

  useGetKioskByIdQuery,
  useGetKioskQueueByIdQuery,
  usePushToKioskQueueByIdMutation,
} = api;

export default api;
