import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';
function Logo() {
  return (
    <Link
      href='/'
      className='relative z-10 p-2 transition-colors border-2 rounded-full border-primary-500 dark:border-primary-600 hover:border-accent-300'
    >
      <Image
        src={logo}
        width={24}
        height={24}
        className='object-cover'
        alt='Logo'
      />
    </Link>
  );
}

export default Logo;
