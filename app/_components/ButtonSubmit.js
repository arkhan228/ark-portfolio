'use client';
import { useFormStatus } from 'react-dom';
import SpinnerMini from './SpinnerMini';

function ButtonSubmit({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      className='self-center px-4 py-2 mt-4 rounded-full disabled:py-3 disabled:px-8 bg-accent-600 dark:bg-accent-700 text-primary-50 disabled:bg-gray-500 disabled:text-accent-300 disabled:cursor-not-allowed'
      disabled={pending}
    >
      {pending ? (
        <span className='mx-auto'>
          <SpinnerMini />
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default ButtonSubmit;
