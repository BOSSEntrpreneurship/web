import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ThemeToggle({ darkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-200 hover:scale-110 hover:shadow-lg"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-200" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transition-transform duration-200" />
      )}
    </button>
  );
}