import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  showBackLink?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackLink = true }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-brand-black border-b border-gray-200 dark:border-neutral-900 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
        <div className="font-heading font-bold text-xl md:text-2xl tracking-wider select-none">
          <Link to="/"><span className="text-brand-black dark:text-white transition-colors">FORMAÇÃO</span>
          <span className="text-brand-red ml-2">ANALISTA CORPORAL</span></Link>
        </div>

        {/* Mobile Toggle (visible only on small screens next to logo if needed, but flex-col centers items so maybe not needed separate.
            Let's keep it simple: Logo | Toggle | BackLink
            But current layout is Logo | BackLink.
            I will add Toggle to the right side or next to back link.
        */}
      </div>
      
      {showBackLink && (
        <Link
          to="/"
          className="text-neutral-500 dark:text-neutral-400 hover:text-brand-red dark:hover:text-brand-red transition-colors"
          aria-label="Voltar ao início"
        >
          <ArrowLeft size={20} />
        </Link>
      )}
    </header>
  );
};

export default Header;