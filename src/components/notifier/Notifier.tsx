import { useEffect, FC } from 'react';

import { ErrorCrossIcon, SuccessIcon } from '@icons';
import { useAppDispatch } from '@store/store';

import { NotifierProps } from './types';

const toastStyle = {
  error: 'bg-errorBg border-errorBorder text-error',
  success: 'bg-successBg border-successBorder text-success',
};

const Notifier: FC<NotifierProps> = (props) => {
  const { id, notification, hideNotifier } = props;

  const { message, type } = notification;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        dispatch(hideNotifier(id));
      }, 3000);
    }
  }, [id]);

  return (
    <div className='w-screen flex justify-center'>
      <div
        className={`border
      mt-2 max-w-[480px] text-xs sm:text-sm
    rounded-lg ${toastStyle[type]}`}
      >
        <div className='flex items-center py-4 px-6 min-w-[300px]'>
          <div className='mr-4'>
            {type === 'error' ? <ErrorCrossIcon /> : <SuccessIcon />}
          </div>
          <div className='flex text-base max-h-[60px] overflow-y-auto'>
            {message}
          </div>
        </div>
        <div id={String(id)} className='absolute bottom-0 left-0 h-1' />
      </div>
    </div>
  );
};

export default Notifier;
