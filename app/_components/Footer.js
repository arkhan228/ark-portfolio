'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiX,
} from '@icons-pack/react-simple-icons';

function Footer() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer className='flex items-center justify-between w-full h-24 px-8 md:px-16 bg-primary-900 text-primary-50'>
      <Logo />
      <div className='flex items-center justify-center gap-8 md:gap-12'>
        <a
          href='https://www.linkedin.com/in/abdul-rhman-79856b16a'
          target='_blank'
          rel='noreferrer'
        >
          <SiLinkedin className='transition-colors text-primary-100 hover:text-primary-300' />
        </a>
        <a href='https://github.com/arkhan228' target='_blank' rel='noreferrer'>
          <SiGithub className='transition-colors text-primary-100 hover:text-primary-300' />
        </a>
        <a href='https://x.com/arkhan406' target='_blank' rel='noreferrer'>
          <SiX className='transition-colors text-primary-100 hover:text-primary-300' />
        </a>
        <a href='mailto:ark573235@gmail.com' target='_blank' rel='noreferrer'>
          <SiGmail className='transition-colors text-primary-100 hover:text-primary-300' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
