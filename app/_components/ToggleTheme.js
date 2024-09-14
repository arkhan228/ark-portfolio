'use client';

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useTheme } from '../_contexts/ThemeProider';

function ToggleTheme() {
  const { darkTheme, setDarkTheme } = useTheme();
  return (
    <div
      className='relative flex items-center justify-center gap-2 px-2 py-1 border-2 rounded-full border-primary-800 bg-primary-50 dark:bg-primary-600 dark:text-primary-50 text-primary-900'
      onClick={() => {
        setDarkTheme(theme => !theme);
        localStorage.setItem('theme', !darkTheme);
      }}
    >
      <div
        className={`absolute w-5 sm:w-7 sm:h-7 h-5 transform -translate-y-1/2 rounded-full top-1/2 bg-primary-900 ${
          darkTheme ? 'translate-x-2/3' : '-translate-x-2/3'
        } transition-transform duration-300`}
      ></div>
      <HiOutlineSun />
      <HiOutlineMoon />
    </div>
  );
}

export default ToggleTheme;
