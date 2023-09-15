import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { DocumentNode } from 'graphql';
import { ClientError } from 'graphql-request';

type ExtraOptions = {
  showNotifier?: boolean;
  failure?: string;
  success?: string;
  showCustomMessage?: boolean;
  successNotifierType?: string;
  failureNotifierType?: string;
};

export type GraphQLArgs = {
  document: string | DocumentNode;
};

export type DefinitionExtraOptions = ExtraOptions &
  Partial<Pick<ClientError, 'request' | 'response'>>;

export type CustomBaseQueryFn = BaseQueryFn<
  GraphQLArgs, // Args
  unknown, // Result
  unknown, // Error
  DefinitionExtraOptions, // DefinitionExtraOptions
  object // Meta
>;
