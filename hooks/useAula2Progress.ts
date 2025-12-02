import { useState, useEffect } from 'react';

interface Aula2Progress {
  completedSections: string[];
  points: number;
  currentBadge: 'iniciante' | 'explorador' | 'mestre';
  quizAnswers: boolean[];
  exerciseText: string;
  progressPercentage: number;
}

const INITIAL_PROGRESS: Aula2Progress = {
  completedSections: [],
  points: 0,
  currentBadge: 'iniciante',
  quizAnswers: [],
  exerciseText: '',
  progressPercentage: 0,
};

const SECTION_POINTS: Record<string, number> = {
  intro: 50,
  lateralidade_card: 50,
  lateralidade_card_2: 50,
  enxaqueca: 50,
  labirintite: 50,
  visao_audicao: 50,
  garganta: 50,
  asma: 50,
  gastrite: 50,
  costas: 50,
  joelhos: 50,
  fibromialgia: 50,
  quiz_1: 50,
  quiz_2: 50,
  quiz_3: 50,
};

const BADGE_THRESHOLDS = {
  iniciante: 150, // 3 seções
  explorador: 300, // 6 seções
  mestre: 550, // 11 seções
};

export const useAula2Progress = () => {
  const [progress, setProgress] = useState<Aula2Progress>(INITIAL_PROGRESS);

  // Carregar progresso do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem('aula2_progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar progresso:', e);
      }
    }
  }, []);

  // Salvar progresso no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('aula2_progress', JSON.stringify(progress));
  }, [progress]);

  const completeSection = (sectionId: string) => {
    setProgress((prev) => {
      if (prev.completedSections.includes(sectionId)) {
        return prev; // Já completado
      }

      const newCompleted = [...prev.completedSections, sectionId];
      const newPoints = prev.points + (SECTION_POINTS[sectionId] || 0);
      
      // Calcular badge atual
      let newBadge: 'iniciante' | 'explorador' | 'mestre' = 'iniciante';
      if (newPoints >= BADGE_THRESHOLDS.mestre) {
        newBadge = 'mestre';
      } else if (newPoints >= BADGE_THRESHOLDS.explorador) {
        newBadge = 'explorador';
      }

      // Calcular percentual (máximo 25% para Aula 2, totalizando 50% com Aula 1)
      const totalPoints = Object.values(SECTION_POINTS).reduce((a, b) => a + b, 0);
      const rawPercentage = (newPoints / totalPoints) * 100;
      const cappedPercentage = Math.min(rawPercentage, 25);

      return {
        ...prev,
        completedSections: newCompleted,
        points: newPoints,
        currentBadge: newBadge,
        progressPercentage: cappedPercentage,
      };
    });
  };

  const saveExercise = (text: string) => {
    setProgress((prev) => ({
      ...prev,
      exerciseText: text,
    }));
  };

  const saveQuizAnswer = (questionIndex: number, isCorrect: boolean) => {
    setProgress((prev) => {
      const newAnswers = [...prev.quizAnswers];
      newAnswers[questionIndex] = isCorrect;
      return {
        ...prev,
        quizAnswers: newAnswers,
      };
    });
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    localStorage.removeItem('aula2_progress');
  };

  const isSectionCompleted = (sectionId: string) => {
    return progress.completedSections.includes(sectionId);
  };

  return {
    progress,
    completeSection,
    saveExercise,
    saveQuizAnswer,
    resetProgress,
    isSectionCompleted,
  };
};
