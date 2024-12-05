import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({
  darkMode,
  toggleDarkMode,
  currentPage,
  setCurrentPage,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo and Title - Taking 1/3 of space */}
            <div className="flex-1">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                {/*
                <img
                  src="/navbarlogo.png"
                  alt="BOSS Entrepreneurship Club Logo"
                  className="h-12 w-12 rounded-full"
                />
                */}
                <span className="font-semibold text-gray-900 dark:text-white hidden sm:block">
                  BOSS Entrepreneurship
                </span>
              </button>
            </div>

            {/* Navigation and Theme Toggle - Taking 2/3 of space */}
            <div className="flex-[2] flex justify-end items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-end space-x-8 flex-1 mr-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                      currentPage === link.id
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : ''
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center">
                <ThemeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />

                {/* Mobile Menu Button */}
                <button
                  className="p-2 ml-4 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}
