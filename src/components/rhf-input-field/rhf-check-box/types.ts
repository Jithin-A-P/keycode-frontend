import { IRHFInputType } from '../types';

export type InputType = 'checkbox' | 'checkbox-rounded';

export interface ISelectionOption {
  label: string;
  value: string | boolean;
}

export interface ICheckBoxProps extends IRHFInputType {
  placeholder?: string;
  showCheckBox?: boolean;
  type?: InputType;
}
