import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LessonPlayer from './pages/LessonPlayer';

const App: React.FC = () => {
	  return (
	    <HashRouter>
	      <div className="flex flex-col min-h-screen">
	        <div className="flex-1">
	          <Routes>
	            <Route path="/" element={<Home />} />
	            <Route path="/aula/:lessonId" element={<LessonPlayer />} />
	            <Route path="*" element={<Navigate to="/" replace />} />
	          </Routes>
	        </div>
	        {/* Custom Footer - Global */}
	        <footer className="bg-gray-100 dark:bg-neutral-900 py-8 border-t border-gray-200 dark:border-neutral-800 transition-colors">
	          <div className="container mx-auto px-4 max-w-4xl text-center">
	            <p className="text-sm text-gray-600 dark:text-neutral-400 mb-4">
	              Terapeuta Analista Corporal © 2025 | Uma jornada de transformação e autoconhecimento
	            </p>
	            <div className="flex justify-center space-x-6">
	              <a href="https://www.tiktok.com/@priscilamoreira.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-neutral-500 hover:text-brand-red transition-colors">
	                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok"><path d="M21 8a2 2 0 0 0-2-2h-5.5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h5.5a2 2 0 0 0 2-2V8z"/><path d="M10 8a2 2 0 0 0-2-2H2.5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2H8a2 2 0 0 0 2-2V8z"/></svg>
	              </a>
	              <a href="https://www.youtube.com/@Priscila-Mentora" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-neutral-500 hover:text-brand-red transition-colors">
	                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17.5v-11c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2z"/><path d="M10 15l5-3-5-3v6z"/></svg>
	              </a>
	              <a href="https://instagram.com/priscillamoreira__" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-neutral-500 hover:text-brand-red transition-colors">
	                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
	              </a>
	            </div>
	          </div>
	        </footer>
	      </div>
	    </HashRouter>
	  );
};

export default App;