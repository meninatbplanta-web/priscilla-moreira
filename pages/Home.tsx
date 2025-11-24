import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Lock } from 'lucide-react';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import { COURSES } from '../data/lessons';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Get data specific to the cards
  const minicourse = COURSES.find(c => c.id === 'minicourse');
  const formation = COURSES.find(c => c.id === 'formation');

  const handleLessonNavigate = (lessonId: number) => {
    navigate(`/aula/${lessonId}`);
  };

  const handleFormationClick = () => {
     // Formation logic (redirect to first lesson or sales page)
     navigate('/aula/101');
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-darker text-white">
      <Header showBackLink={false} />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          
          {/* CARD 1: Minicurso (Free) */}
          {minicourse && (
            <div className="bg-brand-black border border-neutral-800 rounded-xl overflow-hidden flex flex-col relative group h-full hover:border-neutral-700 transition-colors duration-300">
               {/* Glow Effect */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

               <div className="p-8 pb-4 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                     <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">MINICURSO GRATUITO</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                    {minicourse.title}
                  </h2>
               </div>

               <div className="px-8 pb-8 relative z-10 flex-1 flex flex-col">
                  <p className="text-brand-textMuted mb-8 text-sm leading-relaxed flex-grow">
                     {minicourse.description}
                  </p>
                  
                  <button 
                    onClick={() => handleLessonNavigate(1)}
                    className="w-full bg-brand-red hover:bg-brand-darkRed text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wider shadow-lg hover:-translate-y-1"
                  >
                     <Play size={20} fill="currentColor" />
                     Acessar Agora
                  </button>
               </div>
            </div>
          )}

          {/* CARD 2: Formação (Paid/Locked Style) */}
          {formation && (
            <div className="bg-brand-black border border-neutral-900 rounded-xl p-8 flex flex-col h-full relative overflow-hidden group hover:border-neutral-800 transition-all">
              {/* Subtle pattern overlay */}
              <div className="absolute top-0 right-0 p-32 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{formation.price}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                   <Lock size={16} />
                   <span className="text-xs font-bold uppercase">{formation.status}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-heading font-bold mb-4 text-white relative z-10">
                {formation.title}
              </h2>
              <p className="text-brand-textMuted mb-8 flex-grow text-sm leading-relaxed relative z-10">
                {formation.description}
              </p>

              <div className="border-t border-neutral-900 pt-6 mb-8 relative z-10">
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                  <span>{formation.moduleCount} Módulos</span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                  <span>{formation.lessonCount} Aulas</span>
                </div>
              </div>

              <button 
                onClick={handleFormationClick}
                className="relative z-10 w-full bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                Saiba Mais
              </button>
            </div>
          )}
          
        </div>
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Home;