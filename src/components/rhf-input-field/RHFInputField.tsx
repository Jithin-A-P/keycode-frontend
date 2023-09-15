import React from 'react';

import { ErrorWarningIcon } from '@icons';

import { InputType } from './rhf-input/types';
import { InputFieldComponent } from './types';
import RHFCheckBox from './rhf-check-box/RHFCheckBox';
import RHFInput from './rhf-input/RHFInput';

import './styles.css';

const RHFInputField: InputFieldComponent = (props) => {
  const {
    className = '',
    control,
    disabled = false,
    errorMessage = '',
    handleEnter = () => null,
    id,
    inputClass = '',
    isLoading = false,
    isMandatory = false,
    isOptional = false,
    label = '',
    max,
    min,
    name,
    onChange = () => null,
    onFocus = () => null,
    onKeyPress: onKeyPressFn = () => null,
    onKeyUp = () => null,
    placeholder = '',
    preventKeyPress = () => false,
    restrictedChars = [],
    showErrorMessage = true,
    showToolTip = false,
    subLabel = '',
    toolTipStyle = '',
    toolTipTitle = '',
    type = 'field',
  } = props;

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

  const inputField = () => {
    switch (type) {
      case 'checkbox':
        return (
          <RHFCheckBox
            control={control}
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        );
      case 'area':
      case 'text':
      case 'number':
      case 'password':
      default:
        return (
          <RHFInput
            type={type as InputType}
            control={control}
            name={name}
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            restrictedChars={restrictedChars}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            onChange={onChange}
            handleEnter={handleEnter}
            onFocus={onFocus}
            min={min}
            max={max}
            inputClass={inputClass}
          />
        );
    }
  };

  return (
    <div className={`${className} flex-auto`}>
      {label && (
        <div className='flex items-center mb-2'>
          {isLoading ? (
            <div className='input-card h-[15px] w-[72px]' />
          ) : (
            <label className='text-sm text-gray-600'>{label}</label>
          )}
          {isOptional && <span className='text-[#8B8D9D]'>(Optional)</span>}
          {isMandatory && (
            <span className='mandatory-field text-error'> *</span>
          )}{' '}
          {subLabel && <span className='f-14'>{subLabel}</span>}
          {showToolTip && (
            <div className='toolTip'>
              <img
                className='ml-[6px] w-[15px] h-[15px] cursor-pointer'
                src='/assets/icons/toolTip.svg'
                alt='tooltip'
              />
              {toolTipTitle && (
                <div
                  className={`toolTipText rounded-md ${toolTipStyle} bg-[#000000]/50 px-6 py-[9px] text-[#FFFFFF]`}
                >
                  {toolTipTitle}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {isLoading ? (
        <div className={`input-card ${inputClass}`} />
      ) : (
        inputField()
      )}
      {errorMessage && (
        <div
          className={`text-xs mt-2 flex items-center ${
            showErrorMessage ? 'text-error' : 'hide-error-message'
          }`}
        >
          <ErrorWarningIcon className='mr-2' />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default RHFInputField;
