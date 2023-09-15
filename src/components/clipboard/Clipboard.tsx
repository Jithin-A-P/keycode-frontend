import { useState } from 'react';
import { Copy } from '@icons';
import { preventDefaultEvents } from '@utils/generics';

const Clipboard: React.FC<{ value: string; needBackground?: boolean }> = ({
  value,
  needBackground = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = (event: React.MouseEvent<HTMLButtonElement>) => {
    preventDefaultEvents(event);
    navigator.clipboard.writeText(value as string);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500);
  };

  return (
    <button
      className={`h-min relative ${
        needBackground ? 'p-2 bg-slate-200 rounded-full' : ''
      }`}
      onClick={handleCopyText}
      type='submit'
    >
      <Copy className='w-4 h-4' />
      {isCopied && (
        <div className='absolute bg-jaguar text-snow px-2 py-1 rounded-lg -bottom-3.5 left-5 text-xs '>
          Copied
        </div>
      )}
    </button>
  );
};

export default Clipboard;
