import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <a 
              href="mailto:buroakentrepreneurship@gmail.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              buroakentrepreneurship@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <a 
              href="https://www.instagram.com/boss.entrepreneurship/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              @boss.entrepreneurship
            </a>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Bur Oak Secondary School Entrepreneurship Club
          </div>
        </div>
      </div>
    </footer>
  );
}