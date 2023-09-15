import React from 'react';

import { EmptyDataIcon } from '@icons';

const EmptyData = ({
  emptyRecordsMessage,
}: {
  emptyRecordsMessage: string;
}) => (
  <div className='w-full flex justify-center items-center flex-col'>
    <EmptyDataIcon className='w-64 h-64 mt-5' />
    {emptyRecordsMessage}
  </div>
);

export default EmptyData;
