/* eslint-disable no-use-before-define */
import { FunctionComponent, SVGProps } from 'react';

export type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export type ITokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type IPaginationInput = {
  limit: number;
  offset: number;
  sort?: string;
  order?: SortOrder;
};

export type IUser = {
  id: string;
  email?: string;
  firstName: string;
  lastName: string;
  phone?: string;
  isOnBoarded?: boolean;
};

export enum IDeviceCategory {
  CEILING_FAN,
  AC,
}

export type IDeviceUser = {
  accessType?: string;
  device?: IDevice;
  deviceId: string;
  deviceName: string;
  room?: IRoom;
  user?: IUser;
};

export type IVendor = {
  id: string;
  name: string;
};

export type IDeviceInfo = {
  online: boolean;
};

export type IInvitation = {
  invitedUser?: IUser;
  status: string;
};

export type IRoom = {
  id: string;
  name: string;
};

export type IDevice = {
  id: string;
  deviceUsers?: [IDeviceUser];
  rooms: [IRoom];
  latitude: string;
  longitude: string;
  vendor: IVendor;
  vendorId: string;
  deviceInfo?: IDeviceInfo;
  invitations: [IInvitation];
  category: IDeviceCategory;
  averageAmbientTemperature?: number;
};

export enum InputTypes {
  text = 'text',
  area = 'area',
  password = 'password',
  number = 'number',
  checkbox = 'checkbox',
}

export type DateRange = {
  startDate: string;
  endDate: string;
};
