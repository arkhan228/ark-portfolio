'use client';

import Button from './_components/Button';

export default function Error({ error, reset }) {
  return (
    <div className='flex flex-col items-center px-4 mx-auto mt-16 md:px-8 sm:text-xl'>
      <h1 className='mb-2 text-2xl font-semibold sm:text-4xl'>
        Something went wrong!
      </h1>
      <p className='mb-8'>{error.message}</p>
      <Button onClick={reset}>Try again!</Button>
    </div>
  );
}
