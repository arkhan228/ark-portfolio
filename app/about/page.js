import Image from 'next/image';
import arkImage from '@/public/ark-image.png';
import {
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
  HiOutlineSquare3Stack3D,
} from 'react-icons/hi2';

export const metadata = {
  title: 'About',
};

function Page() {
  return (
    <div className='max-w-5xl px-4 mx-auto mt-16 md:px-8'>
      <h1 className='mb-8 text-2xl font-bold sm:mb-12 sm:text-4xl'>About Me</h1>
      <div className='grid items-center grid-cols-1 gap-8 mb-8 justify-items-center sm:grid-cols-2'>
        <div className='relative w-48 h-48 rounded-full sm:w-64 sm:h-64 md:w-80 md:h-80 bg-primary-800'>
          <Image
            src={arkImage}
            alt='Abdul Rhman image'
            fill
            sizes='(max-width: 768px) 50vw, 100vw'
            loading='eager'
            className='object-cover rounded-full dark:brightness-90'
          />
        </div>

        <p className='sm:row-[1/2]'>
          I&apos;m <strong>Abdul Rhman</strong>, a passionate web developer
          based in <strong>Nagaur, Rajasthan</strong>. I specialize in creating
          dynamic, user-friendly websites and web applications.
        </p>
      </div>

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-semibold sm:text-3xl'>My Journey</h2>
        <p>
          My journey into web development began with a curiosity for how
          websites work and a desire to create something impactful. Over the
          years, I&apos;ve honed my skills in HTML, CSS, JavaScript, and various
          modern frameworks like React, Next.js, Tailwind CSS etc. I believe in
          the power of clean, efficient code and strive to build websites that
          are not only visually appealing but also highly functional.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
        <h2 className='text-xl font-semibold sm:text-3xl col-span-full'>
          What I Do
        </h2>
        <div>
          <HiOutlineCodeBracket className='w-8 h-8 mb-4 text-primary-600' />
          <p>
            Crafting responsive and interactive user interfaces using the latest
            web technologies.
          </p>
        </div>
        <div>
          <HiOutlineComputerDesktop className='w-8 h-8 mb-4 text-primary-600' />
          <p>
            Building robust server-side applications and APIs to support
            seamless user experiences.
          </p>
        </div>
        <div>
          <HiOutlineSquare3Stack3D className='w-8 h-8 mb-4 text-primary-600' />
          <p>
            Combining my front-end and back-end skills to deliver complete web
            solutions.
          </p>
        </div>
        <div>
          <HiOutlineAcademicCap className='w-8 h-8 mb-4 text-primary-600' />
          <p>
            Staying updated with the latest trends and technologies in web
            development.
          </p>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-semibold sm:text-3xl'>My Objective</h2>
        <p>
          I believe that a great website is a blend of aesthetics and
          functionality. My goal is to create web experiences that are
          intuitive, engaging, and accessible to all users. I am committed to
          writing clean, maintainable code and continuously improving my skills
          to deliver the best possible results for my clients.
        </p>
      </div>

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-semibold sm:text-3xl'>
          Let&apos;s Connect
        </h2>
        <p>
          I’m always excited to take on new challenges and collaborate with
          like-minded individuals. Whether you have a project in mind or just
          want to chat about web development, feel free to reach out!
        </p>
      </div>

      <a
        href='/resume.pdf'
        className='inline-block mb-4 underline text-accent-600'
        download={'Resume_Abdul_Rhman_Web_Developer'}
      >
        Download resume
      </a>
    </div>
  );
}

export default Page;
