import React, { useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useClickOutside } from '@hooks';
import { CircularLoader, DownArrow } from '@icons';
import { preventDefaultEvents } from '@utils/generics';

import { ISelectProps, OptionType } from './types';
import ClearButton from '../clear-button/ClearButton';

const SingleSelect: React.FC<ISelectProps> = (props) => {
  const {
    dropdownClass = '',
    fetchNextList,
    isDisabled = false,
    isLoading = false,
    needInfiniteScroll,
    needSearch,
    onSelectItems,
    options,
    placeholder,
    searchTerm,
    selectedItem,
    setSearchTerm = () => null,
  } = props;

  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useClickOutside({ ref, handler: () => setShowOptions(false) });

  const handleOptionsVisibility = () => setShowOptions((prev) => !prev);
  const onMenuItemSelect = (menuItem: OptionType) => {
    onSelectItems(menuItem);
    if (setSearchTerm) setSearchTerm(menuItem.label);
    setShowOptions(false);
  };
  const clearSelectedItems = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    preventDefaultEvents(e);
    onSelectItems(null);
    setSearchTerm('');
  };

  const renderOptions = options.map((option) => (
    <div
      className='group cursor-pointer'
      key={option.value}
      role='presentation'
      onClick={() => onMenuItemSelect(option)}
    >
      <div
        className='block p-2 border-transparent border-l-4 group-hover:border-jaguar group-hover:bg-slate-100
      text-sm'
      >
        {option?.element || option.label}
        <div className='text-gray-400 text-xs'>{option.subLabel}</div>
      </div>
    </div>
  ));

  const handleInputClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (showOptions) {
      preventDefaultEvents(e);
    }
  };

  return (
    <div className='prevent-select max-w-md h-full'>
      <div
        className={`relative w-full h-full ${
          isDisabled ? 'cursor-not-allowed opacity-40' : ''
        }`}
        ref={ref}
      >
        <div
          role='presentation'
          onClick={handleOptionsVisibility}
          className={`${isDisabled ? 'pointer-events-none' : ''} 
          h-full w-full bg-white flex border border-gray-400 rounded-lg items-center justify-between`}
        >
          {needSearch ? (
            <input
              type='text'
              placeholder={placeholder}
              className='placeholder:text-jaguar px-3 w-full h-8 rounded-lg outline-none placeholder:text-sm placeholder:font-sans placeholder:opacity-100 text-sm text-ellipsis'
              value={selectedItem?.label || searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
            />
          ) : (
            <span className='px-3 text-sm text-jaguar'>
              {selectedItem?.element || selectedItem?.label || placeholder}
            </span>
          )}

          <div className='flex'>
            {searchTerm || selectedItem ? (
              <ClearButton onClear={clearSelectedItems} />
            ) : (
              <label
                htmlFor='show_more'
                className='cursor-pointer outline-none focus:outline-none
           transition-all text-gray-300 hover:text-gray-600'
              >
                <DownArrow
                  className={`w-4 h-4 mx-2 fill-current transition-all ${
                    showOptions ? 'rotate-180' : ''
                  }`}
                />
              </label>
            )}
          </div>
        </div>

        {showOptions && (
          <div
            className={`absolute rounded-lg shadow bg-white z-2 overflow-hidden w-full mt-1
           border border-gray-400 max-h-60 min-w-max ${dropdownClass}`}
          >
            <div
              className='overflow-y-auto w-full max-h-60'
              id='singleSelectScrollableDiv'
            >
              {options.length > 0 &&
                (needInfiniteScroll ? (
                  <InfiniteScroll
                    hasMore
                    next={fetchNextList}
                    scrollableTarget='singleSelectScrollableDiv'
                    dataLength={options?.length}
                    loader=''
                  >
                    {renderOptions}
                  </InfiniteScroll>
                ) : (
                  renderOptions
                ))}

              {options.length === 0 && (
                <div className='group'>
                  <div
                    className={`py-2 px-3 border-transparent border-l-4 group-hover:border-jaguar
                group-hover:bg-slate-100 ${
                  isLoading ? 'flex justify-center' : ''
                }`}
                  >
                    {isLoading ? (
                      <CircularLoader className='w-8 h-8 stroke-black' />
                    ) : (
                      'No results !'
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleSelect;
