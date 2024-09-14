'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

function Navigation() {
  const [open, setOpen] = useState(false);
  const listRef = useRef();
  const buttonRef = useRef();

  useEffect(
    function () {
      function handleClickOutside(event) {
        if (
          listRef.current &&
          !listRef.current.contains(event.target) &&
          !buttonRef?.current.contains(event.target)
        )
          setOpen(false);
      }

      if (!open) return;

      document.addEventListener('click', handleClickOutside, true);

      document.addEventListener('scroll', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);

        document.removeEventListener('scroll', handleClickOutside, true);
      };
    },
    [open]
  );

  return (
    <>
      <nav className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <ul
          ref={listRef}
          className='absolute flex flex-col items-center justify-center gap-2 p-4 rounded-md shadow-md lg:shadow-none lg:p-0 lg:gap-16 lg:flex-row lg:static lg:bg-transparent bg-primary-400 dark:bg-primary-900 dark:lg:bg-transparent right-16 md:right-20 top-6'
        >
          <li>
            <ToggleTheme />
          </li>
          <li
            onClick={() => setOpen(false)}
            className='transition-colors hover:text-accent-400'
          >
            <Link href='/about'>About</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className='transition-colors hover:text-accent-300'
          >
            <Link href='/projects'>Projects</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className='transition-colors hover:text-accent-400'
          >
            <Link href='/skills'>Skills</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className='transition-colors hover:text-accent-400'
          >
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label='Toggle Navigation'
        className='text-3xl lg:hidden'
      >
        {open ? <HiOutlineXMark /> : <HiOutlineBars3 />}
      </button>
    </>
  );
}

export default Navigation;
