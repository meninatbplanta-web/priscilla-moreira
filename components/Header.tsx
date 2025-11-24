import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  showBackLink?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackLink = true }) => {
  return (
    <header className="w-full bg-brand-black border-b border-neutral-900 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading font-bold text-2xl tracking-wider select-none">
        <span className="text-white">PRISCILLA</span>
        <span className="text-brand-red ml-2">MOREIRA</span>
      </div>
      
      {showBackLink && (
        <Link 
          to="/" 
          className="text-sm font-medium text-neutral-400 hover:text-brand-red transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>
      )}
    </header>
  );
};

export default Header;