import React, { useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useClickOutside } from '@hooks';
import { DownArrow } from '@icons';

import Checkbox from '../check-box/CheckBox';

import { IMultiSelectProps, OptionType } from './types';

const MultiselectDropdown: React.FC<IMultiSelectProps> = ({
  fetchNextList,
  needInfiniteScroll,
  needSearch = true,
  onSelectItems,
  options,
  placeholder,
  selectedItems,
  setSuggestionValue,
  suggestionValue,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const inputEl = useRef(null);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useClickOutside({ ref, handler: () => setShowOptions(false) });

  const onDropdownClick = () => {
    (
      inputEl as unknown as React.MutableRefObject<HTMLDivElement>
    ).current.focus();
  };

  const onMenuItemSelect = (menuItem: OptionType) => {
    const currentItems = [...selectedItems];
    const itemIndex = currentItems.findIndex(
      (item) => item.value === menuItem.value
    );
    if (itemIndex === -1) {
      onSelectItems([...currentItems, menuItem]);
    } else {
      currentItems.splice(itemIndex, 1);
      onSelectItems(currentItems);
    }
  };

  const calculateIsChecked = (item: OptionType) => {
    const itemIndex = selectedItems.findIndex(
      (element) => element.label === item.label
    );
    return itemIndex !== -1;
  };

  const clearSelectedItems = () => onSelectItems([]);

  const handleOptionsVisibility = () => setShowOptions((prev) => !prev);

  const renderOptions = options.map((item) => (
    <div
      className='py-2 px-4 hover:bg-slate-100 border-transparent border-l-4 hover:border-blue-600'
      aria-label='contact'
      key={item.label}
      role='presentation'
      onClick={() => onMenuItemSelect(item)}
    >
      <Checkbox
        id={item.value}
        checkLabel={item?.label}
        isChecked={calculateIsChecked(item)}
        onClick={(evt) => {
          evt.stopPropagation();
          onMenuItemSelect(item);
        }}
      />
    </div>
  ));

  return (
    <div ref={ref} className='content-item max-w-min'>
      <div
        className='flex relative h-full'
        role='presentation'
        onClick={handleOptionsVisibility}
      >
        <div
          ref={inputEl}
          className='input-field ellipsis overflow-hidden relative p-3 w-80 h-full bg-gray-50 rounded-xl
          border border-gray-200 focus:border-black border-solid focus:outline-none pr-10'
        >
          <div className='flex justify-between items-center'>
            {needSearch ? (
              <input
                type='text'
                placeholder={placeholder}
                className='px-2 w-full h-8 rounded-md border-[1px] border-gray-200 outline-none'
                value={suggestionValue}
                onChange={(e) => setSuggestionValue(e.target.value)}
              />
            ) : (
              <span className='text-gray-400'>{placeholder}</span>
            )}
            <div role='presentation' onClick={onDropdownClick} className='h-8'>
              <DownArrow className='pt-1 ml-1 w-5 absolute right-2.5 top-3.5' />
            </div>
          </div>

          {selectedItems.length > 0 && (
            <div className='flex overflow-y-auto flex-wrap gap-2 mt-2 max-h-[75px]'>
              {selectedItems.map((item) => (
                <span
                  key={item?.value}
                  className='text-snow py-1 px-2 min-w-max bg-blue-400 rounded-md'
                >
                  {item?.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {showOptions && (
        <div
          id='multiSelectScrollableDiv'
          className='overflow-y-auto absolute z-40 mt-2 w-80 max-h-60 bg-white rounded-xl shadow-md cursor-default'
        >
          {!!selectedItems.length && (
            <div className='pb-4'>
              <button
                type='button'
                className='absolute right-0 mt-1 mr-1 w-20 text-xs underline'
                onClick={clearSelectedItems}
              >
                Clear
              </button>
            </div>
          )}
          {needInfiniteScroll ? (
            <InfiniteScroll
              hasMore
              next={fetchNextList}
              scrollableTarget='multiSelectScrollableDiv'
              dataLength={options?.length}
              loader=''
            >
              {renderOptions}
            </InfiniteScroll>
          ) : (
            renderOptions
          )}
        </div>
      )}
    </div>
  );
};

export default MultiselectDropdown;
