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
      providesTags: ['campaigns'],
    }),
    createCampaign: builder.mutation({
      query: (body) => ({
        url: `/campaigns`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['campaigns'],
    }),
    getKiosks: builder.query({
      query: () => `/kiosks`,
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
    pushToKioskRequestId: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `kiosks/${id}/queue/request`,
        method: 'POST',
        body,
      }),
    }),
    getKIOSKScheduler: builder.query({
      query: () => `/kiosks/1/queue/next`,
      transformResponse: (data: any) => data?.data,
    }),
    getCampaignById: builder.query({
      query: (id) => `/campaigns/${id}`,
    }),
    postAnnouncement: builder.mutation({
      query: (body) => ({
        url: '/medias',
        method: 'PATCH',
        body
      }),
      transformResponse: (data: any) => data?.data
    }),
    getStartSpinTrigger: builder.query({
      query: () => `kiosks/1/spin`,
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
  usePushToKioskRequestIdMutation,
  useGetKIOSKSchedulerQuery,
  useLazyGetKIOSKSchedulerQuery,
  useGetKiosksQuery,
  useCreateCampaignMutation,
  usePostAnnouncementMutation,
  useLazyGetStartSpinTriggerQuery
} = api;

export default api;
