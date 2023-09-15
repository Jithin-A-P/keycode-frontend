/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getCatalogs: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getCampaigns: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetCatalogsQuery, useGetCampaignsQuery } = api;

export default api;
