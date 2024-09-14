import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-20 px-8 shadow-md md:px-12 bg-primary-50 dark:bg-primary-950'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
