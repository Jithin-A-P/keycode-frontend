import React from 'react';
import { Controller } from 'react-hook-form';

import { ICheckBoxProps } from './types';
import './styles.css';

const RHFCheckBox: React.FC<ICheckBoxProps> = (props) => {
  const {
    placeholder = '',
    control,
    disabled = false,
    id,
    name,
    showCheckBox = true,
    type = 'field',
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div
          className={`${showCheckBox && 'chk-box'} flex flex-row items-center`}
        >
          <label className='flex flex-row items-center'>
            <span className='q-gray'>{placeholder}</span>
            {showCheckBox && (
              <>
                <input
                  type='checkbox'
                  value={field.value as string}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  checked={field.value as boolean}
                  disabled={disabled}
                  id={id}
                />
                <span
                  className={`checkmark ${
                    type === 'checkbox-rounded' ? 'chk-rounded' : ''
                  }`}
                />
              </>
            )}
          </label>
        </div>
      )}
    />
  );
};

export default RHFCheckBox;
