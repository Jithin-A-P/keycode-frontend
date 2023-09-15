/* eslint-disable import/no-cycle */
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

import { handleApiError } from '@utils/errors';
import {
  clearAllLocalStorageItems,
} from '@utils/storage';

import { graphQLOptions } from './options';
import { CustomBaseQueryFn } from './type';

const client = new GraphQLClient(
  `${process.env.REACT_APP_API_ENDPOINT}/graphql`,
  {
    ...graphQLOptions,
    headers: {
    },
  }
);

const gqlBaseQuery = graphqlRequestBaseQuery({ client });

const isTokenExpired = (error: string) => error.toLowerCase().includes('401');

const resetAndRedirectToLogin = () => clearAllLocalStorageItems();


const customFetchGQLBaseQuery: CustomBaseQueryFn = async (
  arg,
  api,
  extraOptions
) => {
  try {
    const result = await gqlBaseQuery(arg, api, extraOptions);
    if (result.error?.message && isTokenExpired(result.error.message)) {
      // result = await handleTokenRefresh(arg, api, extraOptions);
    } else if (result.error?.message && result.error.message.includes('401')) {
      resetAndRedirectToLogin();
    } else if (result.error) {
      handleApiError((result.meta as any)?.response?.errors[0]?.message);
    }
    return result;
  } catch (error) {
    handleApiError();
    return error;
  }
};

const api = createApi({
  reducerPath: 'api',
  baseQuery: customFetchGQLBaseQuery,
  endpoints: () => ({}),
});

export default api;
