import React from 'react';

import { IToggleButtonProps } from './types';
import './toggleStyles.css';

const ToggleButton: React.FC<IToggleButtonProps> = ({
  checked,
  onToggle,
  disabled,
}) => (
  <div className='slider-button mt-5'>
    <label className='switch relative inline-block w-[25px] h-[14px]'>
      <input
        type='checkbox'
        className='checkbox opacity-0 w-0 h-0'
        checked={checked}
        onChange={onToggle}
        disabled={disabled}
      />
      <span
        className='slider absolute cursor-pointer inset-0 rounded-[34px] overflow-hidden bg-[#b4b4b4] 
      before:absolute before:h-[14px] before:w-[14px] before:rounded-full before:bg-white scale-[1.5] origin-top-left'
      />
    </label>
  </div>
);

export default ToggleButton;
