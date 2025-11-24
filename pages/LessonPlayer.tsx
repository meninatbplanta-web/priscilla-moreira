import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Lock, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, FileText, Video, Mic, BrainCircuit, Layers, BarChart3, FileBarChart, Presentation, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import { isLessonAvailable, formatReleaseDate } from '../constants';
import { LESSONS, LESSON_CONTENT, ALL_MODULES } from '../data/lessons';
import { TabOption } from '../types';

const LessonPlayer: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.COURSE);
  const [showLockedModal, setShowLockedModal] = useState<string | null>(null);
  
  // Sidebar state: which module is expanded?
  // Initialize with the module containing the current lesson
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(null);

  const currentLessonId = Number(lessonId);
  const currentLesson = LESSONS.find(l => l.id === currentLessonId);
  
  // Validation: if lesson doesn't exist
  useEffect(() => {
    if (!currentLesson) {
      navigate('/');
    } else {
        // Automatically expand the module of the current lesson
        setExpandedModuleId(currentLesson.moduleId);
    }
  }, [currentLesson, navigate]);

  if (!currentLesson) return null;

  const isUnlocked = currentLesson.courseId === 'minicourse' 
    ? isLessonAvailable(currentLesson) 
    : false; // Paid course is always locked in preview mode
  
  // Special rule: Lesson 1 contents always unlocked for minicourse. Paid course always locked.
  const isContentUnlocked = currentLesson.courseId === 'minicourse' && (currentLesson.id === 1 || isUnlocked);

  // Get next/prev lessons specifically within the context of the entire flat list
  const nextLesson = LESSONS.find(l => l.id === currentLessonId + 1 && l.courseId === currentLesson.courseId);
  const prevLesson = LESSONS.find(l => l.id === currentLessonId - 1 && l.courseId === currentLesson.courseId);

  // Get modules for the current course only
  const courseModules = ALL_MODULES.filter(m => m.courseId === currentLesson.courseId);

  const handleLessonChange = (id: number) => {
    const targetLesson = LESSONS.find(l => l.id === id);
    if (!targetLesson) return;
    
    // Allow navigation to locked lessons to "see" them, but lock content.
    // Except for minicourse future lessons which are date-locked.
    if (targetLesson.courseId === 'minicourse' && !isLessonAvailable(targetLesson)) {
        setShowLockedModal(formatReleaseDate(targetLesson.releaseDate || ''));
        return;
    }

    navigate(`/aula/${id}`);
    window.scrollTo(0,0);
  };

  const toggleModule = (modId: number) => {
    setExpandedModuleId(expandedModuleId === modId ? null : modId);
  };

  const getDynamicContent = () => {
    const lessonContent = LESSON_CONTENT[currentLesson.id];
    if (lessonContent && lessonContent[activeTab]) {
      return lessonContent[activeTab];
    }
    return `
      <p>Conteúdo para <strong>${activeTab}</strong> da aula <strong>${currentLesson.title}</strong> será adicionado em breve.</p>
      <br/>
      <p class="text-sm text-neutral-500">Aguarde a atualização do material didático.</p>
    `;
  };

  const renderTabContent = () => {
    if (!isContentUnlocked) {
       return (
        <div className="h-64 w-full flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-lg bg-neutral-950/50">
          <Lock className="text-neutral-600 mb-4" size={48} />
          <h3 className="text-xl font-heading font-semibold text-white mb-2">Conteúdo Bloqueado</h3>
          <p className="text-neutral-500">
             {currentLesson.courseId === 'minicourse' 
               ? `A aula estará disponível em ${formatReleaseDate(currentLesson.releaseDate || '')}.`
               : 'Faça o login ou adquira a formação para acessar este conteúdo.'}
          </p>
        </div>
       );
    }

    return (
      <div className="bg-brand-black border border-neutral-900 p-8 rounded-lg min-h-[300px] animate-fade-in">
         <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
            {getTabIcon(activeTab)}
            {activeTab}
         </h3>
         
         <div 
            className="text-neutral-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: getDynamicContent() || '' }}
         />
      </div>
    );
  };

  const getTabIcon = (tab: TabOption) => {
    switch(tab) {
      case TabOption.COURSE: return <FileText size={18} />;
      case TabOption.VIDEO_SUMMARY: return <Video size={18} />;
      case TabOption.AUDIO_SUMMARY: return <Mic size={18} />;
      case TabOption.MIND_MAP: return <BrainCircuit size={18} />;
      case TabOption.FLASHCARDS: return <Layers size={18} />;
      case TabOption.INFOGRAPHIC: return <BarChart3 size={18} />;
      case TabOption.REPORT: return <FileBarChart size={18} />;
      case TabOption.QUIZ: return <HelpCircle size={18} />;
      case TabOption.SLIDES: return <Presentation size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-darker text-white flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full h-[calc(100vh-80px)]">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-96 border-r border-neutral-900 bg-brand-black flex-shrink-0 flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-neutral-900 shrink-0">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-neutral-500">
                {currentLesson.courseId === 'minicourse' ? 'Conteúdo do Minicurso' : 'Módulos da Formação'}
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {courseModules.map((module, moduleIndex) => {
              const isExpanded = expandedModuleId === module.id;
              const moduleNumber = moduleIndex + 1;
              
              return (
                <div key={module.id} className="border-b border-neutral-900/50">
                  {/* Module Header */}
                  {currentLesson.courseId === 'formation' ? (
                     <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full text-left p-4 bg-neutral-900/20 hover:bg-neutral-900/40 flex items-center justify-between transition-colors"
                     >
                        <div className="flex flex-col gap-1 pr-2">
                          <span className="text-[11px] font-extrabold uppercase text-brand-red">Módulo {moduleNumber}</span>
                          <h3 className="font-bold text-sm text-neutral-300 line-clamp-1">{module.title}</h3>
                        </div>
                        {isExpanded ? <ChevronUp size={16} className="text-neutral-500" /> : <ChevronDown size={16} className="text-neutral-500" />}
                     </button>
                  ) : (
                    <div className="w-full text-left p-4 bg-neutral-900/20 flex items-center justify-between">
                      <div className="flex flex-col gap-1 pr-2">
                        <span className="text-[11px] font-extrabold uppercase text-brand-red">Módulo {moduleNumber}</span>
                        <h3 className="font-bold text-sm text-neutral-300 line-clamp-1">{module.title}</h3>
                      </div>
                    </div>
                  )}

                  {/* Lessons List - Show if expanded or if it's the minicourse (which has no foldable modules visually) */}
                  {(isExpanded || currentLesson.courseId === 'minicourse') && (
                      <div className="flex flex-col">
                        {module.lessons.map((lesson, lessonIndex) => {
                          const isActive = lesson.id === currentLessonId;
                          // Logic for sidebar lock icon
                          // Minicourse: Lock if date not passed
                          // Formation: Lock all (visual only, allows click)
                          const showLockIcon = lesson.courseId === 'minicourse' 
                            ? !isLessonAvailable(lesson)
                            : true; 

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonChange(lesson.id)}
                              className={`text-left p-4 pl-6 border-l-4 transition-all flex items-start gap-3 group
                                ${isActive 
                                    ? 'bg-neutral-900 border-brand-red' 
                                    : 'border-transparent hover:bg-neutral-900/30'}
                              `}
                            >
                              <div className={`mt-0.5 ${isActive ? 'text-brand-red' : 'text-neutral-600'}`}>
                                {!showLockIcon ? <Play size={14} fill={isActive ? "currentColor" : "none"} /> : <Lock size={14} />}
                              </div>
                              <div className="w-full">
                                <span className="text-[10px] font-extrabold uppercase text-brand-red block mb-1">Aula {lessonIndex + 1}</span>
                                <h4 className={`font-medium text-xs leading-relaxed mb-1 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                                  {lesson.title}
                                </h4>
                                {lesson.duration && (
                                    <span className="text-[10px] text-neutral-600 font-mono block">{lesson.duration}</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="relative w-full h-48">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              alt="Banner das aulas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/80 via-brand-darker/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-6 lg:px-12">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-red font-extrabold">Aulas</p>
                <h1 className="text-2xl lg:text-3xl font-heading font-bold">Explore os módulos e conteúdos disponíveis</h1>
              </div>
            </div>
          </div>
           <div className="p-6 lg:p-12">

            {/* Video Player Area */}
            <div className="w-full aspect-video bg-black rounded-xl border border-neutral-800 mb-8 relative overflow-hidden shadow-2xl">
                {isContentUnlocked ? (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 group cursor-pointer">
                    <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={32} fill="white" className="text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
                    <div className="h-full w-1/4 bg-brand-red"></div>
                    </div>
                    <span className="absolute bottom-4 left-4 text-sm font-mono bg-black/50 px-2 py-1 rounded">
                    Vídeo Demonstrativo: {currentLesson.title}
                    </span>
                </div>
                ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 text-center p-6">
                    <Lock size={48} className="text-neutral-700 mb-4" />
                    <h3 className="text-xl font-heading font-bold text-neutral-300 mb-2">Aula Bloqueada</h3>
                    <p className="text-neutral-500 max-w-md mx-auto">
                        {currentLesson.courseId === 'minicourse' 
                            ? <span>A aula estará disponível em <span className="text-brand-red">{formatReleaseDate(currentLesson.releaseDate || '')}</span>.</span>
                            : <span>Conteúdo exclusivo para alunos matriculados na formação.</span>
                        }
                    </p>
                </div>
                )}
            </div>

            {/* Tabs Navigation */}
            <div className="mb-8 border-b border-neutral-800 overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 min-w-max pb-1">
                {Object.values(TabOption).map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-colors relative 
                        ${activeTab === tab ? 'text-brand-red' : 'text-neutral-500 hover:text-white'}
                    `}
                    >
                    {tab}
                    {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-t-full"></span>
                    )}
                    </button>
                ))}
                </div>
            </div>

            {/* Tabs Content */}
            <div className="mb-12">
                {renderTabContent()}
            </div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-neutral-900">
                {prevLesson ? (
                <button 
                    onClick={() => handleLessonChange(prevLesson.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded border border-neutral-700 text-white hover:bg-neutral-900 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="font-bold uppercase text-sm tracking-wider">Aula Anterior</span>
                </button>
                ) : <div></div>}

                {nextLesson && (
                <button 
                    onClick={() => handleLessonChange(nextLesson.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-brand-red transition-colors font-bold uppercase text-sm tracking-wider"
                >
                    <span className="hidden sm:inline">Próxima Aula</span>
                    <span className="sm:hidden">Próxima</span>
                    <ChevronRight size={20} />
                </button>
                )}
            </div>

          </div>
        </main>
      </div>

      {/* Locked Modal */}
      {showLockedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
           <div className="bg-brand-black border border-neutral-800 p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
              <Lock className="mx-auto text-neutral-600 mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold text-white mb-2">Conteúdo Bloqueado</h3>
              <p className="text-neutral-400 mb-6">
                Esta aula será liberada em <br/>
                <span className="text-brand-red font-bold text-lg">{showLockedModal}</span>
              </p>
              <button 
                onClick={() => setShowLockedModal(null)}
                className="bg-white text-black hover:bg-neutral-200 font-bold py-3 px-8 rounded uppercase tracking-wide transition-colors"
              >
                Entendido
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default LessonPlayer;