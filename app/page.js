import Image from 'next/image';
import bgImage from '@/public/bg.png';
import heroMobile from '@/public/hero-mobile.png';

function Page() {
  return (
    <div>
      <div className='relative flex max-w-3xl grow min-h-64 md:max-w-none lg:static lg:hidden sm:min-h-[28rem] md:min-h-[32rem]'>
        <Image
          src={heroMobile}
          fill
          placeholder='blur'
          quality={80}
          className='object-cover object-right dark:brightness-90'
          alt='Person coding on setup'
        />
      </div>
      <Image
        src={bgImage}
        fill
        placeholder='blur'
        quality={80}
        className='hidden object-cover lg:object-top lg:block dark:brightness-90'
        alt='Person coding on setup'
      />
      <div className='px-4 py-12 lg:py-4 md:px-12 lg:w-3/4 xl:p-20 xl:w-3/5'>
        <p className='ml-[2px] mb-2'>Hey there!</p>
        <h1 className='text-4xl font-bold sm:text-5xl md:text-7xl'>
          I&apos;m <span className='text-accent-600'>Abdul Rhman</span>
        </h1>
        <p className='ml-[2px] mt-2'>
          A full-stack web developer. I create dynamic, user-friendly websites
          and web applications.
        </p>
      </div>
    </div>
  );
}

export default Page;
