import { useEffect } from 'react';

type useClickOutsideProps = {
  ref: React.MutableRefObject<HTMLElement>;
  handler: () => void;
};

const useClickOutside = (props: useClickOutsideProps) => {
  const { ref, handler } = props;
  const listener = (event: Event) => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }
    handler();
  };
  useEffect(() => {
    document.addEventListener('click', listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
    };
  });
};

export default useClickOutside;
