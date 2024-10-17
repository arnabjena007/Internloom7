import React, { useState } from 'react';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Internships', page: 'internships' },
    { name: 'Jobs', page: 'jobs' },
    { name: 'Courses', page: 'courses' },
    { name: 'Competitions', page: 'competitions' },
    { name: 'Dashboard', page: 'dashboard' },
  ];

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.svg" alt="InternLoom Logo" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">InternLoom</span>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <User size={20} />
              <span>Profile</span>
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;