import React, { ChangeEvent, KeyboardEvent } from 'react';

import { Search, Cross } from '@icons';

import { ISearchInput } from './types';

const SearchInput: React.FC<ISearchInput> = (props) => {
  const {
    handleClear,
    onChange,
    onKeyPress = () => null,
    placeHolderText,
    showCloseBtn,
    testId,
    value,
  } = props;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);
  const onInputPress = (event: KeyboardEvent<HTMLInputElement>) =>
    onKeyPress(event.key);

  return (
    <div
      className='border-whisper bg-snow flex
      items-center px-4 w-[324px] h-[48px] rounded-lg border-[1px] justify-between'
      id={testId}
    >
      <div className='flex-row flex w-[94%]'>
        <Search className='search-icon input-search h-6 w-6' />
        <input
          className='bg-snow pr-3 ml-3 outline-none placeholder:text-sm text-jaguar text-sm w-full placeholder:text-jaguar'
          type='text'
          placeholder={placeHolderText}
          onChange={onInputChange}
          onKeyPress={onInputPress}
          value={value}
        />
      </div>
      {showCloseBtn && value && (
        <div
          className='p-1 rounded-full hover:bg-gray-200 cursor-pointer ml-2'
          title='clear'
        >
          <Cross
            className='search-close-icon w-[20px] h-[20px]'
            onClick={handleClear}
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
