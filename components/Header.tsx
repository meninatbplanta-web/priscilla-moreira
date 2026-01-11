import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  showBackLink?: boolean;
  onOpenSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBackLink = true, onOpenSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-brand-black border-b border-gray-200 dark:border-neutral-900 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
      <div className="flex flex-col items-start md:items-center gap-2 w-full md:w-auto">
        <div className="font-heading font-bold text-xl md:text-2xl tracking-wider select-none">
          <Link to="/">
            <span className="text-brand-black dark:text-white transition-colors">FORMAÇÃO</span>
            <span className="text-brand-red ml-2">ANALISTA CORPORAL</span>
          </Link>
        </div>
        
        {onOpenSidebar && (
          <button
            onClick={onOpenSidebar}
            className="text-sm font-medium text-brand-red hover:text-red-600 dark:hover:text-red-400 transition-colors uppercase tracking-wide"
          >
            Aulas
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;