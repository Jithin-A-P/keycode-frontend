import React from 'react';

import { ICheckBoxProps } from './types';

const Checkbox: React.FC<ICheckBoxProps> = ({
  checkLabel,
  id,
  isChecked,
  onClick,
}) => (
  <div>
    <input
      checked={isChecked}
      className='styled-checkbox mr-3'
      id={id}
      onClick={onClick}
      readOnly
      type='checkbox'
    />

    <span>{checkLabel}</span>
  </div>
);

export default Checkbox;
