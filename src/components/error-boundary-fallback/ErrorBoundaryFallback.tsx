import { FallbackProps } from 'react-error-boundary';

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const isNotProduction = process.env.REACT_APP_ENV !== 'production';
  return (
    <div role='alert' className='p-5'>
      <p>Sorry failed to load</p>
      {isNotProduction && error && (
        <pre className='p-2 mt-2 text-sm whitespace-normal bg-red-200'>
          {error.message}
        </pre>
      )}
      <button
        className='inline-flex flex-1 py-2 px-4 mt-2 text-sm rounded-md border shadow-sm'
        onClick={resetErrorBoundary}
        type='button'
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundaryFallback;
