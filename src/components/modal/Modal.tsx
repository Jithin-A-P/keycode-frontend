import React, { ReactNode, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useClickOutside } from '@hooks';
import { Cross } from '@icons';

import Button from '../button/Button';
import { IPopupButton, IPopupProps } from './types';

const defaultButtons: IPopupButton[] = [
  {
    disabled: false,
    text: 'Ok',
    type: 'primary',
  },
];

const Modal: React.FC<IPopupProps> = ({
  buttons = defaultButtons,
  children,
  description,
  isLoading,
  isOpen = false,
  onClose = () => null,
  showClose = true,
  title,
  width,
}) => {
  const PopupNode = useCallback(
    ({ children: nodeChildren }: { children: ReactNode }) =>
      createPortal(nodeChildren, document.body),
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    handler: !isLoading ? onClose : null,
  });

  return (
    isOpen && (
      <PopupNode>
        <div className='absolute inset-0 flex items-center justify-center z-10 bg-[#26262591]'>
          <div
            ref={containerRef}
            className={`bg-white p-6 rounded-md relative ${
              width ? `w-[${width}px]` : 'min-w-[30vw]'
            }`}
          >
            <section>
              {(title || showClose) && (
                <div className='flex w-full justify-between text-xl font-semibold mb-3 text-jaguar'>
                  {title}
                  {showClose && (
                    <button onClick={onClose as any} type='button'>
                      <Cross className='w-8 opacity-60 hover:opacity-100' />
                    </button>
                  )}
                </div>
              )}
              {description || children}
              {buttons && (
                <div className='flex flex-row gap-3 mt-4 justify-end'>
                  {buttons.map((button) => (
                    <Button
                      handleButtonClick={() => onClose(button)}
                      key={button.text}
                      disabled={!!button.disabled}
                      className={`h-[40px] min-w-[80px] rounded px-4 ${
                        button.disabled && 'opacity-60 cursor-not-allowed'
                      } ${
                        button.type === 'primary'
                          ? 'text-snow bg-jaguar'
                          : 'border border-solid border-jaguar bg-white text-jaguar'
                      }`}
                      isLoading={!!button.isLoading}
                      label={button.text}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </PopupNode>
    )
  );
};

export default Modal;
