export interface Lesson {
  id: number;
  courseId: string;
  moduleId: number;
  title: string;
  releaseDate?: string; // Optional for paid course (always locked or unlocked by purchase)
  duration: string | null;
  isLocked: boolean;
}

export interface Module {
  id: number;
  courseId: string;
  title: string;
  lessons: Lesson[];
}

export enum TabOption {
  COURSE = 'Curso',
  VIDEO_SUMMARY = 'Resumo em Vídeo',
  AUDIO_SUMMARY = 'Resumo em Áudio',
  MIND_MAP = 'Mapa Mental',
  FLASHCARDS = 'Cartões Didáticos',
  INFOGRAPHIC = 'Infográfico',
  REPORT = 'Relatório',
  QUIZ = 'Teste',
  SLIDES = 'Slides',
}

export interface Course {
  id: string;
  title: string;
  price?: string;
  isFree: boolean;
  description: string;
  moduleCount: number;
  lessonCount: number;
  status: 'Liberado' | 'Bloqueado';
}