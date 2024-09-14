import Link from 'next/link';

function Page() {
  return (
    <div className='flex flex-col items-center px-4 mx-auto mt-16 md:px-8 sm:text-xl'>
      <h1 className='mb-2 text-2xl font-semibold sm:text-4xl'>
        Thank you for reaching out!
      </h1>
      <p className='mb-8'>We&apos;ll be in touch soon.</p>
      <Link href='/' className='underline text-accent-600'>
        Back to home
      </Link>
    </div>
  );
}

export default Page;
