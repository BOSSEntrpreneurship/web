import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // If no saved preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Update status bar color for dark mode
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#111827');
    } else {
      document.documentElement.classList.remove('dark');
      // Update status bar color for light mode
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#ffffff');
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [darkMode, setDarkMode] as const;
}
