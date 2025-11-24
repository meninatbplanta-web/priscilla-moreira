import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Lock, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import { COURSES } from '../data/lessons';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleCourseClick = (courseId: string) => {
    if (courseId === 'minicourse') {
      // Go to first lesson of minicourse (ID 1)
      navigate('/aula/1');
    } else {
      // Go to first lesson of formation (ID 101)
      navigate('/aula/101');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-darker text-white">
      <Header showBackLink={false} />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          
          {/* Card 1: Minicurso (Free) */}
          {COURSES.filter(c => c.isFree).map(course => (
            <div key={course.id} className="bg-brand-black border border-neutral-800 hover:border-brand-red transition-colors duration-300 rounded-xl p-8 flex flex-col group h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">GRÁTIS</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                   <CheckCircle2 size={16} />
                   <span className="text-xs font-bold uppercase">{course.status}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-heading font-bold mb-4 text-white group-hover:text-brand-red transition-colors">
                {course.title}
              </h2>
              <p className="text-brand-textMuted mb-8 flex-grow text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="border-t border-neutral-900 pt-6 mb-8">
                <div className="flex items-center gap-6 text-sm text-neutral-400">
                  <span>{course.moduleCount} Módulo</span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                  <span>{course.lessonCount} Aulas</span>
                </div>
              </div>

              <button 
                onClick={() => handleCourseClick(course.id)}
                className="w-full bg-brand-red hover:bg-brand-darkRed text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wider shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
              >
                <Play size={20} fill="currentColor" />
                Entrar Agora
              </button>
            </div>
          ))}

          {/* Card 2: Formação (Paid) */}
          {COURSES.filter(c => !c.isFree).map(course => (
            <div key={course.id} className="bg-brand-black border border-neutral-900 rounded-xl p-8 flex flex-col opacity-90 hover:opacity-100 transition-opacity h-full relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute top-0 right-0 p-32 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{course.price}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                   <Lock size={16} />
                   <span className="text-xs font-bold uppercase">{course.status}</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-heading font-bold mb-4 text-white relative z-10">
                {course.title}
              </h2>
              <p className="text-brand-textMuted mb-8 flex-grow text-sm leading-relaxed relative z-10">
                {course.description}
              </p>

              <div className="border-t border-neutral-900 pt-6 mb-8 relative z-10">
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                  <span>{course.moduleCount} Módulos</span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                  <span>{course.lessonCount} Aulas</span>
                </div>
              </div>

              <button 
                onClick={() => handleCourseClick(course.id)}
                className="relative z-10 w-full bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                Saiba Mais
              </button>
            </div>
          ))}
          
        </div>
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Home;