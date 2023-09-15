import { IRHFInputType } from '../types';

export type InputType = 'text' | 'area' | 'password' | 'number';

export interface ISelectionOption {
  label: string;
  value: string | boolean;
}

export interface IInputProps<TFields> extends IRHFInputType<TFields> {
  handleEnter?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  inputClass?: string;
  isSearchableInput?: boolean;
  max?: number | string;
  min?: number | string;
  onChange?: (e: string) => void;
  onFocus?: React.FocusEventHandler;
  onKeyPress?: React.KeyboardEventHandler;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  preventKeyPress?: (key: string) => boolean;
  ref?: React.MutableRefObject<HTMLInputElement | undefined>;
  restrictedChars?: string[];
  type?: InputType;
}

export type InputComponentType = <TFields>(
  props: IInputProps<TFields>
) => React.ReactElement;
