import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type NotifierProps = {
  id: string | number;
  notification: {
    message: string;
    type: string;
    id: string | number;
    position: number;
  };
  hideNotifier: ActionCreatorWithPayload<number | string, string>;
};
