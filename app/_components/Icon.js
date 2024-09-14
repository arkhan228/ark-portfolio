'use client';

// import { useTheme } from '@/app/_contexts/ThemeProider';
import { icons } from '@/app/_data/skills-data';
import { darkIcons } from '@/app/_data/skills-data';
import { useTheme } from '@/app/_contexts/ThemeProider';

function Icon({ iconName, skill }) {
  const { darkTheme } = useTheme();
  const Icon = icons[iconName];

  return (
    <Icon
      color={
        darkTheme && darkIcons.includes(skill.name) ? '#D2EEF3' : 'default'
      }
      className='dark:brightness-90 hover:cursor-pointer'
      size={96}
    />
  );
}

export default Icon;
