import React, { useRef } from 'react';

import { DoubleCaretRight, ProfileIcon } from '@icons';

import { IHeaderProps } from './type';

const Header = (props: IHeaderProps) => {
  const { isBarExpanded, toggleSideNavBar } = props;

  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`bg-snow flex fixed top-0
    justify-between items-center px-6 h-20 right-0 transition-all duration-[var(--sidenav-animation-duration)] 
    motion-reduce:transition-none ${
      isBarExpanded
        ? 'w-[calc(100%-var(--expanded-sidenav-width))]'
        : 'w-[calc(100%-var(--collapsed-sidenav-width))]'
    }`}
    >
      <div className='rounded-3xl border-charcoal border-2 w-10 h-10 flex items-center justify-center absolute -left-6 bg-jaguar'>
        <DoubleCaretRight
          onClick={toggleSideNavBar}
          className={`${
            isBarExpanded ? 'scale-[-1]' : ''
          } cursor-pointer w-5 h-5`}
        />
      </div>
      <div
        ref={headerRef}
        className='flex flex-row justify-end w-full items-center'
      >
        <div className='flex-col mr-5 text-right'>
          <p className='text-base text-jaguar'>John Doe</p>
        </div>
        <div className='flex justify-center items-center w-6 h-6'>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
