import { Control, FieldValues, Path } from 'react-hook-form';

import { InputTypes } from '../../types/common';

export type InputType = InputTypes;

export interface ISelectionOption {
  label: string;
  value: string | boolean;
}
export interface IRHFInputType<
  TFields extends FieldValues = any,
  TContext = any
> {
  className?: string;
  control: Control<TFields, TContext>;
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  isMandatory?: boolean;
  isOptional?: boolean;
  label?: string;
  name: Path<TFields>;
  showErrorMessage?: boolean;
  showToolTip?: boolean;
  subLabel?: string;
  toolTipStyle?: string;
  toolTipTitle?: string;
}

export interface IInputProps<TFields> extends IRHFInputType<TFields> {
  handleEnter?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  inputClass?: string;
  isLoading?: boolean;
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

export type InputFieldComponent = <TFields>(
  props: IInputProps<TFields>
) => React.ReactElement;
