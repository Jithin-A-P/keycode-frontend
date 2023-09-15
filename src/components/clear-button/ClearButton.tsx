import React from 'react';

import { Cross } from '@icons';

const ClearButton = ({ onClear }) => (
  <button
    className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300
          hover:text-gray-600'
    type='button'
    onClick={onClear}
  >
    <Cross className='w-4 h-4 mx-2 fill-current opacity-60 hover:opacity-100' />
  </button>
);

export default ClearButton;
