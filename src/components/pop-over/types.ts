import { ReactElement } from 'react';

export type PopOverProps = {
  children: ReactElement;
  body: ReactElement;
  alignRight: boolean;
  visibility: boolean;
  handleOnClick: () => void;
  outerClass?: string;
  innerClass?: string;
  backgroundColor?: string;
  orderStyle?: string;
  customStyle?: string;
};
