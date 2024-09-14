'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme'))
      setDarkTheme(JSON.parse(localStorage.getItem('theme')));
    else
      setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (darkTheme) document.documentElement.classList.add('dark');

    if (!darkTheme) document.documentElement.classList.remove('dark');
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}

export { ThemeProvider, useTheme };
