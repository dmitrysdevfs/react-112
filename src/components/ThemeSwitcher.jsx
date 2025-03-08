import { useEffect } from 'react';
import { useState } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const hanldeChange = () => setIsDark(mediaQuery.matches);

    mediaQuery.addEventListener('change', hanldeChange);

    return () => {
      mediaQuery.removeEventListener('change', hanldeChange);
    };
  }, []);

  return <div>{isDark ? 'Темна тема' : 'Світла тема'}</div>;
}
