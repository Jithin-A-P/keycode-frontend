import React from 'react';

import { CircularLoader, SelectArrow } from '@icons';

import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  fetchNext,
  fetchPrevious,
  isFetching = false,
  itemsInPage,
  limit,
  totalItems = 0,
  totalPages = Math.ceil(totalItems / limit),
}) => {
  const nextDisabled = totalPages === currentPage;
  const previousDisabled = currentPage === 1;
  const currentPageIndex = currentPage - 1;

  return (
    itemsInPage > 0 && (
      <div className='flex flex-row justify-center items-center my-4 mx-2 h-[1rem] max-w-min'>
        <span className='w-[120px] text-center flex gap-2 justify-center items-center'>
          {isFetching ? (
            <CircularLoader className='stroke-black w-10 -ml-3' />
          ) : (
            <span className='font-semibold'>
              {`${currentPageIndex * limit + 1} -
            ${Number(currentPageIndex * limit + itemsInPage) || 0} `}
            </span>
          )}
          <span>{totalItems > 0 && ` of ${totalItems}`}</span>
        </span>

        <SelectArrow
          className={`inline-block h-4 w-4 rotate-90 mx-1 ${
            previousDisabled
              ? 'opacity-30 cursor-not-allowed'
              : 'cursor-pointer'
          }`}
          role='presentation'
          onClick={currentPage > 1 ? fetchPrevious : () => null}
        />

        <SelectArrow
          className={`inline-block h-4 w-4 -rotate-90 mx-1 ${
            nextDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
          role='presentation'
          onClick={!nextDisabled ? fetchNext : () => null}
        />
      </div>
    )
  );
};

export default Pagination;
