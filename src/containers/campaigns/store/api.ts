

// import api from '@services/api';

// import {
//   IDeleteUserRequest,
//   IDeleteUserResponse,
//   IGetUserByIDRequest,
//   IGetUserByIDResponse,
//   IGetUsersRequest,
//   IGetUsersResponse,
// } from '../type';;

// const CampaignsApi = api
//   .enhanceEndpoints({
//     addTagTypes: ['Campaigns'],
//   })
//   .injectEndpoints({
//     endpoints: (builder) => ({
//       getUsers: builder.query<IGetUsersResponse, IGetUsersRequest>({
//         query: ({ isFilter, ...variables }) => ({
//           document: isFilter ? GET_USERS_FILTER : GET_USERS,
//           variables,
//         }),
//         transformResponse: (response: IGetUsersResponse) => response,
//         providesTags: ['Campaigns'],
//       }),
//       getUserByID: builder.query<IGetUserByIDResponse, IGetUserByIDRequest>({
//         query: (variables) => ({
//           document: GET_USER_BY_ID,
//           variables,
//         }),
//         transformResponse: (response: IGetUserByIDResponse) => response,
//       }),
//       deleteUser: builder.mutation<IDeleteUserResponse, IDeleteUserRequest>({
//         query: (variables) => ({
//           document: DELETE_USER,
//           variables,
//         }),
//         invalidatesTags: ['Campaigns'],
//       }),
//     }),
//   });

// export const {
//   useDeleteUserMutation,
//   useGetUserByIDQuery,
//   useLazyGetUsersQuery,
// } = CampaignsApi;


export {};