import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const kioskApis = createApi({
  reducerPath: 'ad',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getKIOSScreenScheduler: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetKIOSScreenSchedulerQuery } = kioskApis