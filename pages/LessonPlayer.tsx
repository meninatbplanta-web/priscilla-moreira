import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Lock, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, FileText, Video, Mic, BrainCircuit, Layers, BarChart3, FileBarChart, Presentation, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import { isLessonAvailable, formatReleaseDate } from '../constants';
import { LESSONS, LESSON_CONTENT, ALL_MODULES, COURSES } from '../data/lessons';
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
  const currentCourse = COURSES.find(c => c.id === currentLesson?.courseId);
  
  // Validation: if lesson doesn't exist
  useEffect(() => {
    if (!currentLesson) {
      navigate('/');
    } else {
        // Automatically expand the module of the current lesson if not already expanded
        setExpandedModuleId((prev) => prev === null ? currentLesson.moduleId : prev);
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
    // No window.scrollTo(0,0) needed here as the content div scrolls independently, 
    // but we can scroll the main content div if we had a ref. 
    // For now, let's rely on user scroll or reset if we add a ref later.
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
        <div className="h-64 w-full flex flex-col items-center justify-center border border-dashed border-gray-300 dark:border-neutral-800 rounded-lg bg-gray-50 dark:bg-neutral-950/50">
          <Lock className="text-gray-400 dark:text-neutral-600 mb-4" size={48} />
          <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">Conteúdo Bloqueado</h3>
          <p className="text-gray-500 dark:text-neutral-500">
             {currentLesson.courseId === 'minicourse' 
               ? `A aula estará disponível em ${formatReleaseDate(currentLesson.releaseDate || '')}.`
               : 'Faça o login ou adquira a formação para acessar este conteúdo.'}
          </p>
        </div>
       );
    }

    return (
      <div className="bg-white dark:bg-brand-black border border-gray-200 dark:border-neutral-900 p-8 rounded-lg min-h-[300px] animate-fade-in transition-colors duration-300">
         <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            {getTabIcon(activeTab)}
            {activeTab}
         </h3>
         
         <div 
            className="text-gray-700 dark:text-neutral-300 leading-relaxed space-y-4"
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

  const renderVideoSection = () => (
      <div className="w-full aspect-video bg-black rounded-xl border border-gray-200 dark:border-neutral-800 mb-8 relative overflow-hidden shadow-2xl">
        {isContentUnlocked ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 group cursor-pointer transition-colors duration-300">
            <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
            <Play size={32} fill="white" className="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-neutral-800">
            <div className="h-full w-1/4 bg-brand-red"></div>
            </div>
            <span className="absolute bottom-4 left-4 text-sm font-mono bg-black/50 text-white px-2 py-1 rounded">
            Vídeo Demonstrativo: {currentLesson.title}
            </span>
        </div>
        ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-950 text-center p-6 transition-colors duration-300">
            <Lock size={48} className="text-gray-400 dark:text-neutral-700 mb-4" />
            <h3 className="text-xl font-heading font-bold text-gray-700 dark:text-neutral-300 mb-2">Aula Bloqueada</h3>
            <p className="text-gray-500 dark:text-neutral-500 max-w-md mx-auto">
                {currentLesson.courseId === 'minicourse' 
                    ? <span>A aula estará disponível em <span className="text-brand-red">{formatReleaseDate(currentLesson.releaseDate || '')}</span>.</span>
                    : <span>Conteúdo exclusivo para alunos matriculados na formação.</span>
                }
            </p>
        </div>
        )}
      </div>
  );

  // --- MINICURSO LAYOUT ---
  if (currentLesson.courseId === 'minicourse') {
     return (
        <div className="h-screen bg-gray-50 dark:bg-brand-darker text-gray-900 dark:text-white flex flex-col overflow-hidden transition-colors duration-300">
            <Header />
            <div className="flex-1 overflow-y-auto custom-scrollbar">
               <main className="container mx-auto px-4 py-12 max-w-4xl">
                  
                  {/* Header Info */}
                  <div className="mb-10 text-center md:text-left">
                     <div className="inline-flex items-center gap-2 mb-4 bg-gray-200 dark:bg-neutral-900/50 px-3 py-1 rounded-full border border-gray-300 dark:border-neutral-800 md:border-none md:bg-transparent md:p-0 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-widest">MINICURSO GRATUITO</span>
                     </div>
                     <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
                        {currentCourse?.title}
                     </h1>
                  </div>

                  {/* Inline Lesson List */}
                  <div className="mb-16">
                     <h3 className="text-xs font-bold text-gray-500 dark:text-neutral-500 uppercase tracking-widest mb-6">CONTEÚDO DO MINICURSO</h3>
                     <div className="flex flex-col gap-6">
                        {courseModules[0]?.lessons.map((lesson) => {
                            const isActive = lesson.id === currentLessonId;
                            const isLocked = !isLessonAvailable(lesson);
                            return (
                                <div 
                                    key={lesson.id} 
                                    onClick={() => handleLessonChange(lesson.id)}
                                    className={`flex items-start gap-4 cursor-pointer group transition-all duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-50 hover:opacity-80'}`}
                                >
                                    <div className={`mt-1 flex-shrink-0 ${isActive ? 'text-brand-red' : 'text-gray-400 dark:text-neutral-600'}`}>
                                        {isActive ? <Play size={24} fill="currentColor" /> : (isLocked ? <Lock size={20} /> : <Play size={20} />)}
                                    </div>
                                    <div>
                                        <h4 className={`font-heading font-bold text-lg md:text-xl leading-tight mb-1 transition-colors ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                                            {lesson.title}
                                        </h4>
                                        <span className="text-xs font-mono text-gray-500 dark:text-neutral-600">{lesson.duration || '60:00'}</span>
                                    </div>
                                </div>
                            );
                        })}
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="border-t border-gray-200 dark:border-neutral-900 pt-12 animate-fade-in-up transition-colors">
                      {renderVideoSection()}
                      
                      {isContentUnlocked && (
                          <div>
                            {/* Simplified Tabs for Minicurso */}
                            <div className="mb-8 border-b border-gray-200 dark:border-neutral-800 overflow-x-auto scrollbar-hide">
                                <div className="flex gap-8 min-w-max pb-1">
                                {Object.values(TabOption).map((tab) => (
                                    <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-colors relative 
                                        ${activeTab === tab ? 'text-brand-red' : 'text-gray-500 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white'}
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
                            {renderTabContent()}
                          </div>
                      )}
                  </div>

               </main>
            </div>
            
             {/* Locked Modal */}
            {showLockedModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
                <div className="bg-white dark:bg-brand-black border border-gray-200 dark:border-neutral-800 p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
                    <Lock className="mx-auto text-gray-400 dark:text-neutral-600 mb-4" size={40} />
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">Conteúdo Bloqueado</h3>
                    <p className="text-gray-500 dark:text-neutral-400 mb-6">
                        Esta aula será liberada em <br/>
                        <span className="text-brand-red font-bold text-lg">{showLockedModal}</span>
                    </p>
                    <button 
                        onClick={() => setShowLockedModal(null)}
                        className="bg-gray-100 dark:bg-white text-gray-900 dark:text-black hover:bg-gray-200 dark:hover:bg-neutral-200 font-bold py-3 px-8 rounded uppercase tracking-wide transition-colors"
                    >
                        Entendido
                    </button>
                </div>
                </div>
            )}
        </div>
     );
  }

  // --- DEFAULT FORMATION LAYOUT ---
  return (
    <div className="h-screen bg-gray-50 dark:bg-brand-darker text-gray-900 dark:text-white flex flex-col overflow-hidden transition-colors duration-300">
      <Header />

      {/* Course Banner */}
      {currentCourse && (
        <div className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 py-6 px-6 md:px-12 flex-shrink-0 relative overflow-hidden transition-colors">
             {/* Background Accent */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="max-w-[1600px] mx-auto w-full relative z-10">
                <div className="flex items-center gap-3 mb-2">
                   <div className={`w-2 h-2 rounded-full ${currentCourse.id === 'minicourse' ? 'bg-green-500' : 'bg-brand-red'}`}></div>
                   <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase tracking-widest">
                        {currentCourse.id === 'minicourse' ? 'Minicurso Gratuito' : 'Formação Completa'}
                   </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                    {currentCourse.title}
                </h1>
            </div>
        </div>
      )}

      <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] mx-auto w-full overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-96 border-r border-gray-200 dark:border-neutral-900 bg-white dark:bg-brand-black flex-shrink-0 flex flex-col h-full overflow-hidden transition-colors">
          <div className="p-6 border-b border-gray-200 dark:border-neutral-900 shrink-0">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-neutral-500">
                {currentLesson.courseId === 'minicourse' ? 'Conteúdo do Minicurso' : 'Módulos da Formação'}
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {courseModules.map((module) => {
              const isExpanded = expandedModuleId === module.id;
              
              return (
                <div key={module.id} className="border-b border-gray-100 dark:border-neutral-900/50 transition-colors">
                  {/* Module Header */}
                  {currentLesson.courseId === 'formation' ? (
                     <button 
                        onClick={() => toggleModule(module.id)}
                        className="w-full text-left p-4 bg-gray-50 dark:bg-neutral-900/20 hover:bg-gray-100 dark:hover:bg-neutral-900/40 flex items-center justify-between transition-colors"
                     >
                        <div>
                          <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest mb-1 block">
                            Módulo {module.id}
                          </span>
                          <h3 className="font-bold text-sm text-gray-800 dark:text-neutral-300 line-clamp-1 pr-2">{module.title}</h3>
                        </div>
                        {isExpanded ? <ChevronUp size={16} className="text-gray-500 dark:text-neutral-500" /> : <ChevronDown size={16} className="text-gray-500 dark:text-neutral-500" />}
                     </button>
                  ) : null}

                  {/* Lessons List - Show if expanded or if it's the minicourse (which has no foldable modules visually) */}
                  {(isExpanded || currentLesson.courseId === 'minicourse') && (
                      <div className="flex flex-col">
                        {module.lessons.map((lesson, index) => {
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
                                    ? 'bg-gray-100 dark:bg-neutral-900 border-brand-red'
                                    : 'border-transparent hover:bg-gray-50 dark:hover:bg-neutral-900/30'}
                              `}
                            >
                              <div className={`mt-0.5 ${isActive ? 'text-brand-red' : 'text-gray-400 dark:text-neutral-600'}`}>
                                {!showLockIcon ? <Play size={14} fill={isActive ? "currentColor" : "none"} /> : <Lock size={14} />}
                              </div>
                              <div className="w-full">
                                {currentLesson.courseId === 'formation' && (
                                    <span className={`text-[10px] font-bold uppercase tracking-wide block mb-0.5 transition-colors ${isActive ? 'text-brand-red/80' : 'text-gray-500 dark:text-neutral-500 group-hover:text-brand-red/70'}`}>
                                    Aula {index + 1}
                                    </span>
                                )}
                                <h4 className={`font-medium text-xs leading-relaxed mb-1 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-neutral-400 group-hover:text-gray-900 dark:group-hover:text-neutral-200'}`}>
                                  {lesson.title}
                                </h4>
                                {lesson.duration && (
                                    <span className="text-[10px] text-gray-500 dark:text-neutral-600 font-mono block">{lesson.duration}</span>
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
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50 dark:bg-brand-darker transition-colors">
           <div className="p-6 lg:p-12 pb-24">
            
            {/* Video Player Area */}
            {renderVideoSection()}

            {/* Lesson Info Header (Below Video) */}
            <div className="mb-8">
                {currentLesson.courseId === 'formation' && (
                     <span className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2 block">
                        Módulo {currentLesson.moduleId} • Aula {currentLesson.id - 100} 
                        {/* Note: ID math is a rough display approximation, real app would use array index */}
                     </span>
                )}
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">{currentLesson.title}</h2>
            </div>

            {/* Tabs Navigation */}
            <div className="mb-8 border-b border-gray-200 dark:border-neutral-800 overflow-x-auto scrollbar-hide">
                <div className="flex gap-8 min-w-max pb-1">
                {Object.values(TabOption).map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-bold uppercase tracking-wide transition-colors relative 
                        ${activeTab === tab ? 'text-brand-red' : 'text-gray-500 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white'}
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
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-neutral-900 transition-colors">
                {prevLesson ? (
                <button 
                    onClick={() => handleLessonChange(prevLesson.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="font-bold uppercase text-sm tracking-wider">Aula Anterior</span>
                </button>
                ) : <div></div>}

                {nextLesson && (
                <button 
                    onClick={() => handleLessonChange(nextLesson.id)}
                    className="flex items-center gap-2 px-6 py-3 rounded bg-gray-900 dark:bg-neutral-900 border border-gray-800 dark:border-neutral-800 text-white dark:text-neutral-300 hover:text-brand-red dark:hover:text-white hover:border-brand-red transition-colors font-bold uppercase text-sm tracking-wider"
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
           <div className="bg-white dark:bg-brand-black border border-gray-200 dark:border-neutral-800 p-8 rounded-lg shadow-2xl max-w-md w-full text-center transition-colors">
              <Lock className="mx-auto text-gray-400 dark:text-neutral-600 mb-4" size={40} />
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">Conteúdo Bloqueado</h3>
              <p className="text-gray-500 dark:text-neutral-400 mb-6">
                Esta aula será liberada em <br/>
                <span className="text-brand-red font-bold text-lg">{showLockedModal}</span>
              </p>
              <button 
                onClick={() => setShowLockedModal(null)}
                className="bg-gray-100 dark:bg-white text-gray-900 dark:text-black hover:bg-gray-200 dark:hover:bg-neutral-200 font-bold py-3 px-8 rounded uppercase tracking-wide transition-colors"
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
