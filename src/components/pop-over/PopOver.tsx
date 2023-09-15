import React, { FC, useRef } from 'react';

import { useClickOutside } from '@hooks';

import { PopOverProps } from './types';

const PopOver: FC<PopOverProps> = (props) => {
  const {
    children,
    visibility,
    alignRight,
    body,
    handleOnClick,
    outerClass,
    innerClass,
    orderStyle,
    backgroundColor,
    customStyle,
  } = props;

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useClickOutside({ ref, handler: visibility ? handleOnClick : () => null });

  const onPopoverContentClick = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();

  return (
    <div
      className={`group relative flex cursor-pointer flex-col ${
        alignRight ? 'items-start' : 'items-end'
      } ${outerClass} ${orderStyle}`}
      role='presentation'
      onClick={handleOnClick}
      ref={ref}
    >
      {children}
      {/* The placeholder where popover appears */}
      <div
        className={`
          ${visibility ? 'flex' : 'hidden'}
        absolute top-14 z-10 flex-col-reverse items-center 
        drop-shadow-[4px_4px_4px_rgba(0,0,0,0.20)] ease-in-out ${innerClass}`}
      >
        <span
          className={`relative z-20 -mt-10 cursor-default rounded-md ${
            backgroundColor || 'bg-white'
          } text-xs leading-none  text-black ${customStyle}`}
          role='presentation'
          onClick={(e) => onPopoverContentClick(e)}
        >
          {body}
          {/* Content inside the popover */}
        </span>
      </div>
    </div>
  );
};

export default PopOver;
