import { PatchedRequestInit } from 'graphql-request/dist/types';

export const graphQLOptions: PatchedRequestInit = {
  credentials: 'include',
  mode: 'cors',
};
