import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function MobileMenu({ isOpen, onClose, currentPage, setCurrentPage }: MobileMenuProps) {
  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { id: 'home', label: "Home" },
    { id: 'about', label: "About" },
    { id: 'events', label: "Events" },
    { id: 'contact', label: "Contact" },
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                currentPage === link.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}