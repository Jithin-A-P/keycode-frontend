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
      query: () => `/kiosks/1/queue/next`,
      transformResponse: (data: any) => data?.data
    }),
    postAnnouncement: builder.mutation({
      query: (body) => ({
        url: '/medias',
        method: 'PATCH',
        body
      }),
      transformResponse: (data: any) => data?.data
    })
  }),
})

export const { useGetCatalogsQuery, useGetCampaignsQuery, useGetKIOSKSchedulerQuery, useGetKiosksQuery, usePostAnnouncementMutation } = api;

export default api;
