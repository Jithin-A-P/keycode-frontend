import React from 'react';
import { Controller, get, RefCallBack } from 'react-hook-form';

import { InputComponentType } from './types';

const RHFInput: InputComponentType = (props) => {
  const {
    control,
    disabled = false,
    errorMessage = '',
    handleEnter = () => null,
    id,
    inputClass = '',
    isSearchableInput = false,
    max,
    min,
    name,
    onChange = () => null,
    onFocus = () => null,
    onKeyPress: onKeyPressFn = () => null,
    onKeyUp = () => null,
    placeholder = '',
    preventKeyPress = () => false,
    ref = undefined,
    restrictedChars = [],
    type = 'field',
  } = props;

  const restrictedCharsNum = ['e', 'E', '+', '-', '.'];

  const refFn = (fieldRef: RefCallBack) => (e) => {
    fieldRef(e);
    if (ref) ref.current = e; // you can still assign to ref
  };

  const errMsgString =
    // eslint-disable-next-line no-underscore-dangle
    errorMessage || get(control?._formState?.errors, name)?.message;

  const onKeyPress = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLSelectElement>
  ) => {
    if (preventKeyPress(e.key)) {
      e.preventDefault();
    }

    onKeyPressFn(e);
  };

  const inputStyle = () => {
    if (errMsgString) return 'border-error';
    if (disabled) return 'bg-gray-50 text-gray-600 cursor-not-allowed';
    return 'border-sky-800 bg-blue-50 text-jaguar';
  };

  switch (type) {
    case 'area':
      return (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <textarea
              rows={4}
              cols={50}
              placeholder={placeholder}
              className='custom-area poppins'
              value={(field.value as string) || ''}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={refFn(field.ref)}
              onKeyPress={(e) => {
                if (restrictedChars.includes(e.key)) {
                  e.preventDefault();
                }
                onKeyPressFn(e);
              }}
              id={id}
            />
          )}
        />
      );
    case 'text':
    case 'number':
    case 'password':
    default:
      return (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              name={name}
              value={field.value as string}
              onChange={(e) => {
                field.onChange(e);
                onChange(e.target.value);
              }}
              onBlur={field.onBlur}
              ref={refFn(field.ref)}
              placeholder={placeholder}
              className={`${inputClass} rounded-lg w-full px-5 border h-12 text-ellipsis
                 text-sm outline-none ${
                   isSearchableInput && 'px-25'
                 } ${inputStyle()}`}
              onKeyDown={handleEnter}
              disabled={disabled}
              type={type}
              min={min}
              max={max}
              onKeyPress={(e) => {
                if (
                  type === 'number' &&
                  [...restrictedChars, ...restrictedCharsNum].includes(e.key)
                ) {
                  e.preventDefault();
                }
                onKeyPress(e);
              }}
              onKeyUp={onKeyUp}
              onFocus={onFocus}
              autoComplete='off'
              id={id}
            />
          )}
        />
      );
  }
};

export default RHFInput;
