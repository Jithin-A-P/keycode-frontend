import { IPaginationInput, IUser } from '../../types/common';

export type IGetUserByIDResponse = {
  getUser: IUser;
};

export type IGetUserByIDRequest = {
  id: string;
};
export type IDeleteUserRequest = IGetUserByIDRequest;

export type IDeleteUserResponse = {
  deleteUser: {
    id: string;
    email: string;
  };
};

export type IGetUsersResponse = {
  getUsers: {
    totalCount: number;
    nodes: [IUser];
  };
};

export type IGetUsersRequest = {
  pagination: IPaginationInput;
  searchTerm: string;
  isFilter?: boolean;
};

export enum UserDetailsForm {
  USER_FIRST_NAME = 'firstName',
  USER_LAST_NAME = 'lastName',
  USER_EMAIL = 'email',
  USER_PHONE = 'phone',
}

export type IUserDetailsForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export enum Actions {
  DELETE = 'Delete',
  VIEW = 'View',
}
