import { FC } from 'react';

import { CircularLoader } from '@icons';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = (props) => {
  const {
    btnClass,
    children,
    className,
    disabled = false,
    disabledStyle = '',
    handleButtonClick,
    headIcon,
    isLoading,
    label,
    tailIcon,
  } = props;

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    if (handleButtonClick && !isLoading) {
      handleButtonClick(e);
      e.stopPropagation();
    }
  };

  return (
    <button
      className={`${className} ${
        disabled
          ? `bg-slate-500 opacity-40 cursor-not-allowed ${disabledStyle}`
          : btnClass
      } flex items-center justify-center h-10 rounded-[54px] px-3 ${
        isLoading && 'cursor-not-allowed'
      }`}
      type='button'
      onClick={onButtonClick}
      disabled={disabled}
    >
      {isLoading && <CircularLoader className='w-10 absolute' />}
      <div className={`${isLoading ? 'opacity-0' : ''}`}>
        {headIcon && headIcon}
        {label && <span>{label}</span>}
        {children}
        {tailIcon && tailIcon}
      </div>
    </button>
  );
};

export default Button;
