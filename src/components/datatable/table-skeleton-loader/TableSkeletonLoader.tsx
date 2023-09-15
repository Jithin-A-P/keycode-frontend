import React from 'react';

import { ITableSkeletonLoaderProps } from './types';
import './styles.css';

const numArray = (num: number) => new Array(num).fill(0).map((_, i) => i);

const TableSkeletonLoader = ({
  rows = 5,
  cols = 5,
  rowHeight = '1rem',
}: ITableSkeletonLoaderProps) => (
  <div className='mt-4'>
    {numArray(rows).map((id) => (
      <div
        key={id}
        className='table-skeleton-wrapper v-center flex w-full h-[70px]'
        style={{ height: rowHeight }}
      >
        {numArray(cols).map((key) => (
          <div
            key={key}
            className='skeleton-card-wrapper mx-2'
            style={{ width: `calc(100% / ${cols} )` }}
          >
            <div className='card' />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default TableSkeletonLoader;
