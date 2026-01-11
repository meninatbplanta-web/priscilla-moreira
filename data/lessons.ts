import { Lesson, Course, Module, TabOption } from '../types';

const CURRENT_YEAR = new Date().getFullYear();

// Helper for random duration between 50 and 60 minutes
const getRandomDuration = () => {
  const minutes = Math.floor(Math.random() * (60 - 50 + 1) + 50);
  return `${minutes}:00`;
};

// --- MINICURSO DATA ---
export const MINICOURSE_MODULE: Module = {
  id: 1,
  courseId: 'minicourse',
  title: 'Minicurso Gratuito',
  lessons: [
    {
      id: 1,
      courseId: 'minicourse',
      moduleId: 1,
      title: "Aula 1: Fundamentos da Análise Corporal",
      releaseDate: `${CURRENT_YEAR}-01-12T20:00:00`,
      duration: "60:00",
      isLocked: false,
    },
    {
      id: 2,
      courseId: 'minicourse',
      moduleId: 1,
      title: "Aula 2: Quais doenças nascem das emoções?",
      releaseDate: `${CURRENT_YEAR}-01-14T20:00:00`,
      duration: "60:00",
      isLocked: false,
    },
    {
      id: 3,
      courseId: 'minicourse',
      moduleId: 1,
      title: "Aula 3: Análise corporal ao vivo",
      releaseDate: `${CURRENT_YEAR}-01-16T20:00:00`,
      duration: "60:00",
      isLocked: false,
    },
    {
      id: 4,
      courseId: 'minicourse',
      moduleId: 1,
      title: "Aula 4: Como viver de leitura corporal?",
      releaseDate: `${CURRENT_YEAR}-01-18T15:00:00`,
      duration: "60:00",
      isLocked: false,
    }
  ]
};

// --- FORMATION RAW DATA ---
const RAW_FORMATION_DATA = [
  // --- INTRODUÇÃO ---
  {
    "id": 0,
    "phase": "COMECE AQUI",
    "titulo": "BOAS VINDAS",
    "aulas": [
      { "titulo": "Aula 0: Boas Vindas e o Mapa da Formação", "duracao": "10:00" }
    ]
  },
  // --- FASE 1: O DESPERTAR ---
  {
    "id": 1,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "O DNA DO TERAPEUTA DE ELITE",
    "aulas": [
      { "titulo": "Aula 1 - A Jornada do Herói e o Curador Ferido", "duracao": null },
      { "titulo": "Aula 2 - O Código de Honra e Ética", "duracao": null },
      { "titulo": "Aula 3 - Meta-Learning: A Ciência da Aprendizagem Acelerada", "duracao": null },
      { "titulo": "Aula 4 - A Neutralidade Compassiva", "duracao": null },
      { "titulo": "Aula 5 - O Poder do Ambiente (Comunidade)", "duracao": null }
    ]
  },
  {
    "id": 2,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "A ENGENHARIA DA REALIDADE",
    "aulas": [
      { "titulo": "Aula 6 - A Estrutura do Ego: Persona, Sombra e Self", "duracao": null },
      { "titulo": "Aula 7 - O Fim da Vítima (Saindo do Triângulo Dramático)", "duracao": null },
      { "titulo": "Aula 8 - A Mecânica da Projeção e do Espelho", "duracao": null },
      { "titulo": "Aula 9 - O Vício Emocional e a Bioquímica do Sofrimento", "duracao": null },
      { "titulo": "Aula 10 - A Arte da Ressignificação", "duracao": null }
    ]
  },
  {
    "id": 3,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "ARQUEOLOGIA DO SELF (A CRIANÇA INTERIOR)",
    "aulas": [
      { "titulo": "Aula 11 - O Mapa das 5 Feridas Emocionais", "duracao": null },
      { "titulo": "Aula 12 - Diagnóstico: A Criança Ferida no Comando", "duracao": null },
      { "titulo": "Aula 13 - Lealdades Invisíveis e Amor Cego", "duracao": null },
      { "titulo": "Aula 14 - Vivência Guiada: O Resgate (Prática)", "duracao": null },
      { "titulo": "Aula 15 - O Caminho da Gratidão Real", "duracao": null }
    ]
  },
  {
    "id": 4,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "BIOHACKING E REGULAÇÃO DO SISTEMA NERVOSO",
    "aulas": [
      { "titulo": "Aula 16 - A Biologia da Emoção (Teoria Polivagal Descomplicada)", "duracao": null },
      { "titulo": "Aula 17 - Expandindo a Janela de Tolerância", "duracao": null },
      { "titulo": "Aula 18 - Grounding Avançado e Bioenergética", "duracao": null },
      { "titulo": "Aula 19 - O Corpo como Recurso de Autoridade", "duracao": null },
      { "titulo": "Aula 20 - Higiene do Sono e Rotina de Alta Performance", "duracao": null }
    ]
  },
  {
    "id": 5,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "AS LEIS DO INCONSCIENTE (INTRODUÇÃO SISTÊMICA)",
    "aulas": [
      { "titulo": "Aula 21 - O Campo Morfogenético", "duracao": null },
      { "titulo": "Aula 22 - As 3 Leis do Amor (Aplicadas ao Individual)", "duracao": null },
      { "titulo": "Aula 23 - Pai e Mãe: As Fontes da Vida e do Sucesso", "duracao": null },
      { "titulo": "Aula 24 - Emaranhamentos Sistêmicos", "duracao": null },
      { "titulo": "Aula 25 - A Virada de Chave: De Paciente a Analista", "duracao": null }
    ]
  },

  // --- FASE 2: O ANALISTA ---
  {
    "id": 6,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "FUNDAMENTOS DA BIOLOGIA DO COMPORTAMENTO",
    "aulas": [
      { "titulo": "Aula 26 - A História da Leitura Corporal", "duracao": null },
      { "titulo": "Aula 27 - Embriologia e Mielinização: A Fábrica de Caracteres", "duracao": null },
      { "titulo": "Aula 28 - Trauma de Desenvolvimento vs. Trauma de Choque", "duracao": null },
      { "titulo": "Aula 29 - O Conceito de Recurso e Dor", "duracao": null },
      { "titulo": "Aula 30 - Treinando o Olhar Clínico (Calibragem)", "duracao": null }
    ]
  },
  {
    "id": 7,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO ESQUIZOIDE (A Mente Criativa)",
    "aulas": [
      { "titulo": "Aula 31 - Gênese do Esquizoide (Gestação e Rejeição)", "duracao": null },
      { "titulo": "Aula 32 - Anatomia do Esquizoide (Leitura Visual)", "duracao": null },
      { "titulo": "Aula 33 - A Dor da Rejeição e a Caverna", "duracao": null },
      { "titulo": "Aula 34 - O Recurso da Criatividade e Lógica", "duracao": null },
      { "titulo": "Aula 35 - Manejo e Tratamento do Esquizoide", "duracao": null }
    ]
  },
  {
    "id": 8,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO ORAL (A Conexão Sensorial)",
    "aulas": [
      { "titulo": "Aula 36 - Gênese do Oral (Amamentação e Abandono)", "duracao": null },
      { "titulo": "Aula 37 - Anatomia do Oral (Leitura Visual)", "duracao": null },
      { "titulo": "Aula 38 - A Dor do Abandono e o Vazio Existencial", "duracao": null },
      { "titulo": "Aula 39 - O Recurso da Comunicação e Acolhimento", "duracao": null },
      { "titulo": "Aula 40 - Manejo e Tratamento do Oral", "duracao": null }
    ]
  },
  {
    "id": 9,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO PSICOPATA (O Líder Articulador)",
    "aulas": [
      { "titulo": "Aula 41 - Gênese do Psicopata (Primeiros Passos e Manipulação)", "duracao": null },
      { "titulo": "Aula 42 - Anatomia do Psicopata (Leitura Visual)", "duracao": null },
      { "titulo": "Aula 43 - A Dor da Manipulação e a Desconfiança", "duracao": null },
      { "titulo": "Aula 44 - O Recurso da Liderança e Negociação", "duracao": null },
      { "titulo": "Aula 45 - Manejo e Tratamento do Psicopata", "duracao": null }
    ]
  },
  {
    "id": 10,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO MASOQUISTA (O Executor Consistente)",
    "aulas": [
      { "titulo": "Aula 46 - Gênese do Masoquista (Desfralde e Humilhação)", "duracao": null },
      { "titulo": "Aula 47 - Anatomia do Masoquista (Leitura Visual)", "duracao": null },
      { "titulo": "Aula 48 - A Dor da Humilhação e a Panela de Pressão", "duracao": null },
      { "titulo": "Aula 49 - O Recurso da Planejamento e Lealdade", "duracao": null },
      { "titulo": "Aula 50 - Manejo e Tratamento do Masoquista", "duracao": null }
    ]
  },
  {
    "id": 11,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO RÍGIDO (O Realizador Ágil)",
    "aulas": [
      { "titulo": "Aula 51 - Gênese do Rígido (Fase Edípica e Traição)", "duracao": null },
      { "titulo": "Aula 52 - Anatomia do Rígido (Leitura Visual)", "duracao": null },
      { "titulo": "Aula 53 - A Dor da Traição e a Comparação", "duracao": null },
      { "titulo": "Aula 54 - O Recurso da Agilidade e Proatividade", "duracao": null },
      { "titulo": "Aula 55 - Manejo e Tratamento do Rígido", "duracao": null }
    ]
  },
  {
    "id": 12,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O MÉTODO DE INTEGRAÇÃO (Exclusivo)",
    "aulas": [
      { "titulo": "Aula 56 - A Dinâmica dos Traços (Combinações)", "duracao": null },
      { "titulo": "Aula 57 - Integração dos 3 Pilares (Traço + Criança + Sistema)", "duracao": null },
      { "titulo": "Aula 58 - A Hierarquia da Dor", "duracao": null },
      { "titulo": "Aula 59 - O \"Mapa do Inferno\" vs. O \"Mapa do Céu\"", "duracao": null },
      { "titulo": "Aula 60 - Estudos de Caso Complexos", "duracao": null }
    ]
  },
  {
    "id": 13,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "A FERRAMENTA DE MAPEAMENTO E ANAMNESE",
    "aulas": [
      { "titulo": "Aula 61 - A Ferramenta Gráfica (O Gráfico de Traços)", "duracao": null },
      { "titulo": "Aula 62 - A Anamnese Estratégica", "duracao": null },
      { "titulo": "Aula 63 - O Roteiro da Primeira Sessão de Análise", "duracao": null },
      { "titulo": "Aula 64 - A Devolutiva Impactante", "duracao": null },
      { "titulo": "Aula 65 - Transição para a Terapia (Venda da Fase 3)", "duracao": null }
    ]
  },

  // --- FASE 3: O CLÍNICO ---
  {
    "id": 14,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "A ENGENHARIA DO INCONSCIENTE (Psicanálise)",
    "aulas": [
      { "titulo": "Aula 66 - O Aparelho Psíquico (Id, Ego e Superego)", "duracao": null },
      { "titulo": "Aula 67 - As Couraças Musculares (De Reich a Lowen)", "duracao": null },
      { "titulo": "Aula 68 - Mecanismos de Defesa do Ego", "duracao": null },
      { "titulo": "Aula 69 - Interpretação de Sonhos e Símbolos", "duracao": null },
      { "titulo": "Aula 70 - Pulsões de Vida e Morte", "duracao": null }
    ]
  },
  {
    "id": 15,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "INTELIGÊNCIA SISTÊMICA (Leis do Amor)",
    "aulas": [
      { "titulo": "Aula 71 - As Ordens da Ajuda (Postura do Terapeuta)", "duracao": null },
      { "titulo": "Aula 72 - A Boa e a Má Consciência", "duracao": null },
      { "titulo": "Aula 73 - Tomando Pai e Mãe (A Fonte da Força)", "duracao": null },
      { "titulo": "Aula 74 - Masculino e Feminino Feridos", "duracao": null },
      { "titulo": "Aula 75 - Constelação na Cadeira (Exercícios Individuais)", "duracao": null }
    ]
  },
  {
    "id": 16,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "NEUROCIÊNCIA DO TRAUMA",
    "aulas": [
      { "titulo": "Aula 76 - A Anatomia do Trauma", "duracao": null },
      { "titulo": "Aula 77 - Neuroplasticidade e a Velocidade da Cura", "duracao": null },
      { "titulo": "Aula 78 - Investigação Compassiva e Camadas do Trauma", "duracao": null },
      { "titulo": "Aula 79 - Psicoeducação: Ensinando o Cliente a se Entender", "duracao": null },
      { "titulo": "Aula 80 - Metáforas Terapêuticas", "duracao": null }
    ]
  },
  {
    "id": 17,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "PROTOCOLOS CLÍNICOS I – ANSIEDADE E MEDO",
    "aulas": [
      { "titulo": "Aula 81 - Decodificando a Ansiedade (Visão Corporal e Sistêmica)", "duracao": null },
      { "titulo": "Aula 82 - \"Tudo o que temo me sobrevém\" (O Medo Antecipatório)", "duracao": null },
      { "titulo": "Aula 83 - Manejo de Crise em Sessão", "duracao": null },
      { "titulo": "Aula 84 - Ferramentas de Dissolução do Medo", "duracao": null },
      { "titulo": "Aula 85 - Protocolo Prático: Ansiedade Zero", "duracao": null }
    ]
  },
  {
    "id": 18,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "PROTOCOLOS CLÍNICOS II – DEPRESSÃO E CRENÇAS",
    "aulas": [
      { "titulo": "Aula 86 - A Depressão sob a Ótica da Análise Corporal", "duracao": null },
      { "titulo": "Aula 87 - Visão Sistêmica da Depressão", "duracao": null },
      { "titulo": "Aula 88 - Crenças Limitantes: A Raiz Mental", "duracao": null },
      { "titulo": "Aula 89 - Reprogramação de Crenças e Traumas", "duracao": null },
      { "titulo": "Aula 90 - Protocolo de Retorno à Vida", "duracao": null }
    ]
  },
  {
    "id": 19,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "LEITURA AVANÇADA E A VERDADE",
    "aulas": [
      { "titulo": "Aula 91 - Emoções Primárias vs. Emoções Sociais", "duracao": null },
      { "titulo": "Aula 92 - A Incongruência: Quando a Boca diz Sim e o Corpo diz Não", "duracao": null },
      { "titulo": "Aula 93 - Leitura de Ambientes e Dinâmicas de Grupo", "duracao": null },
      { "titulo": "Aula 94 - O Corpo na Mentira e na Ocultação", "duracao": null },
      { "titulo": "Aula 95 - Devolvendo a Verdade", "duracao": null }
    ]
  },

  // --- FASE 4: O PROFISSIONAL ---
  {
    "id": 20,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "POSICIONAMENTO E IDENTIDADE",
    "aulas": [
      { "titulo": "Aula 96 - Paciente ou Cliente? (Posicionamento)", "duracao": null },
      { "titulo": "Aula 97 - Compaixão x Empatia x Piedade", "duracao": null },
      { "titulo": "Aula 98 - Ética e Responsabilidade Legal", "duracao": null },
      { "titulo": "Aula 99 - O \"Setting\" Terapêutico", "duracao": null },
      { "titulo": "Aula 100 - Normas de um Atendimento de Excelência", "duracao": null }
    ]
  },
  {
    "id": 21,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "A SESSÃO PERFEITA",
    "aulas": [
      { "titulo": "Aula 101 - Rapport Instantâneo e Conexão", "duracao": null },
      { "titulo": "Aula 102 - Escuta Ativa e Presença Plena", "duracao": null },
      { "titulo": "Aula 103 - Gestão de Conflitos e Resistências", "duracao": null },
      { "titulo": "Aula 104 - Sinais de Interesse e Desinteresse", "duracao": null },
      { "titulo": "Aula 105 - Fechamento e Âncoras", "duracao": null }
    ]
  },
  {
    "id": 22,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "VENDA, PRECIFICAÇÃO E RETENÇÃO",
    "aulas": [
      { "titulo": "Aula 106 - A Psicologia da Precificação (Quanto vale a sua hora?)", "duracao": null },
      { "titulo": "Aula 107 - Vendendo Processos, Não Horas (LTV)", "duracao": null },
      { "titulo": "Aula 108 - O Script de Vendas Terapêutico", "duracao": null },
      { "titulo": "Aula 109 - \"Você quer o resultado ou a caminhada?\"", "duracao": null },
      { "titulo": "Aula 110 - Fidelização e Indicações", "duracao": null }
    ]
  },
  {
    "id": 23,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "EXPANSÃO DE CARREIRA",
    "aulas": [
      { "titulo": "Aula 111 - Leitura Corporal Corporativa (B2B)", "duracao": null },
      { "titulo": "Aula 112 - Terapia em Grupo e Workshops", "duracao": null },
      { "titulo": "Aula 113 - Atendimento Online: Quebrando Fronteiras", "duracao": null },
      { "titulo": "Aula 114 - Palestras e Treinamentos", "duracao": null }
    ]
  },
  {
    "id": 24,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "O CAMINHO DO MESTRE (CONCLUSÃO)",
    "aulas": [
      { "titulo": "Aula 115 - A Importância da Supervisão Clínica", "duracao": null },
      { "titulo": "Aula 116 - O Que Mais Estudar? (Bibliografia)", "duracao": null },
      { "titulo": "Aula 117 - Transição de Carreira Segura", "duracao": null },
      { "titulo": "Aula 118 - Mensagem Final e Certificação", "duracao": null }
    ]
  }
];

// Process Formation Data to match Types
let lessonIdCounter = 101;
const FORMATION_MODULES: Module[] = RAW_FORMATION_DATA.map((mod: any) => ({
  id: mod.id,
  courseId: 'formation',
  title: mod.titulo,
  phase: mod.phase, // Added to support phases
  lessons: mod.aulas.map((aula: any, index: number) => {
    let finalDuration = aula.duracao;

    // Exception for Module 1, first 3 lessons (Boas Vindas, WhatsApp, Termo)
    // Ensure they remain null (no duration)
    if (mod.id === 1 && index < 3) {
      finalDuration = null;
    }
    // For other modules or other lessons, if duration is missing, generate random
    else if (!finalDuration) {
      finalDuration = getRandomDuration();
    }

    return {
      id: lessonIdCounter++,
      courseId: 'formation',
      moduleId: mod.id,
      title: aula.titulo,
      duration: finalDuration,
      isLocked: mod.id === 0 ? false : true, // Unlock Module 0 (Welcome), lock others
    };
  })
}));

// Combine Modules
export const ALL_MODULES = [MINICOURSE_MODULE, ...FORMATION_MODULES];

// Helper to flatten lessons for routing lookup
export const LESSONS: Lesson[] = ALL_MODULES.flatMap(m => m.lessons);

export const COURSES: Course[] = [
  {
    id: 'minicourse',
    title: 'Minicurso Terapeuta Analista Corporal',
    isFree: true,
    description: 'Introdução completa aos fundamentos da análise corporal.',
    moduleCount: 1,
    lessonCount: 4,
    status: 'Liberado',
  },
  {
    id: 'formation',
    title: 'Formação Terapeuta Analista Corporal',
    price: 'R$ 1997',
    isFree: false,
    description: 'A formação definitiva para quem deseja viver de terapia.',
    moduleCount: FORMATION_MODULES.length,
    lessonCount: FORMATION_MODULES.reduce((acc, m) => acc + m.lessons.length, 0),
    status: 'Bloqueado',
  }
];

// Content mapping
export const LESSON_CONTENT: Record<number, Partial<Record<TabOption, string>>> = {
  1: {
    [TabOption.COURSE]: `<iframe src="/aula1-minicurso.html" style="width: 100%; height: 100vh; border: none; border-radius: 12px; overflow: hidden;" title="Aula 1 - Fundamentos da Análise Corporal"></iframe>
    `,
    [TabOption.VIDEO_SUMMARY]: `
      <p class="mb-4">Um resumo dinâmico de 5 minutos cobrindo os pontos chaves da Aula 1.</p>
      <div class="bg-neutral-900 p-4 rounded border border-neutral-800">
        <span class="text-brand-red font-bold">Destaque:</span> A explicação sobre mielinização da medula espinhal aos 10 minutos.
      </div>
    `,
    [TabOption.MIND_MAP]: `
      <p>O mapa mental desta aula conecta os conceitos de Formação dos Traços com as Fases do Desenvolvimento Infantil.</p>
      <p class="text-sm text-neutral-500 mt-2">Clique no botão abaixo para baixar o PDF em alta resolução.</p>
    `,
  },
  101: {
    [TabOption.COURSE]: `
      <div class="max-w-4xl mx-auto space-y-8 px-0 md:px-6 text-gray-800 dark:text-gray-200">
        <img src="https://priscilla-moreira.com/imagens/formacao/aula-0.jpg" alt="Banner Aula 0" class="w-full rounded-xl shadow-lg mb-8" />
        <h1 class="text-3xl font-bold text-center text-brand-red mb-8">O Mapa da Sua Evolução: Entenda como Funciona a Formação</h1>
        
        <p class="text-lg leading-relaxed">
          Seja muito bem-vindo(a) à <strong>Formação Terapeuta Analista Corporal</strong>.<br><br>
          Você acaba de dar o passo mais importante da sua carreira. Mas atenção: este não é um curso comum onde você apenas "assiste aulas". Esta é uma <strong>Jornada de Transformação em 4 Níveis</strong>.
        </p>

        <p class="text-lg leading-relaxed">
          Nós desenhamos essa estrutura para que você não seja apenas um "leitor de corpos", mas um <strong>Terapeuta de Elite</strong>, capaz de tratar traumas profundos e viver muito bem dessa profissão.
        </p>

        <div class="bg-gray-50 dark:bg-neutral-900/50 p-4 md:p-8 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm my-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Como funciona a sua Jornada?</h2>
          <p class="mb-6">O curso é dividido em 4 Fases Sequenciais. É fundamental que você respeite essa ordem:</p>

          <div class="relative py-8">
            <!-- Vertical Connecting Line -->
            <div class="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-20 rounded-full"></div>

            <div class="space-y-12">
              <!-- FASE 1 -->
              <div class="relative flex items-start group">
                <!-- Node -->
                <div class="absolute left-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 border-4 border-white dark:border-brand-black flex items-center justify-center text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-100 dark:ring-blue-900/50">
                  <span class="relative z-10">🔵</span>
                  <div class="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-500/20 animate-ping opacity-20"></div>
                </div>
                
                <!-- Card -->
                <div class="ml-16 flex-1 bg-white dark:bg-neutral-800/50 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 relative group-hover:-translate-y-1">
                  <!-- Arrow -->
                  <div class="absolute top-5 -left-2 w-4 h-4 bg-white dark:bg-neutral-800/50 border-l border-b border-gray-100 dark:border-neutral-700 transform rotate-45 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300"></div>
                  
                  <h3 class="font-heading font-bold text-lg text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                    FASE 1: O DESPERTAR
                    <span class="text-xs font-normal px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">Você</span>
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    O foco é a sua cura. Você não pode levar um cliente onde você nunca foi. Aqui, preparamos seu emocional e seu sistema nervoso para sustentar a profissão.
                  </p>
                </div>
              </div>

              <!-- FASE 2 -->
              <div class="relative flex items-start group">
                <div class="absolute left-0 w-12 h-12 rounded-full bg-violet-50 dark:bg-violet-900/20 border-4 border-white dark:border-brand-black flex items-center justify-center text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-violet-100 dark:ring-violet-900/50">
                  <span class="relative z-10">🟣</span>
                </div>
                
                <div class="ml-16 flex-1 bg-white dark:bg-neutral-800/50 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300 relative group-hover:-translate-y-1">
                  <div class="absolute top-5 -left-2 w-4 h-4 bg-white dark:bg-neutral-800/50 border-l border-b border-gray-100 dark:border-neutral-700 transform rotate-45 group-hover:border-violet-200 dark:group-hover:border-violet-800 transition-colors duration-300"></div>
                  
                  <h3 class="font-heading font-bold text-lg text-violet-600 dark:text-violet-400 mb-2 flex items-center gap-2">
                    FASE 2: O ANALISTA
                    <span class="text-xs font-normal px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800">A Técnica</span>
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    O foco é a ferramenta. Aqui você domina a Leitura Corporal, os Traços de Caráter e o nosso método exclusivo de mapeamento.
                  </p>
                </div>
              </div>

              <!-- FASE 3 -->
              <div class="relative flex items-start group">
                <div class="absolute left-0 w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-900/20 border-4 border-white dark:border-brand-black flex items-center justify-center text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-rose-100 dark:ring-rose-900/50">
                  <span class="relative z-10">🔴</span>
                </div>
                
                <div class="ml-16 flex-1 bg-white dark:bg-neutral-800/50 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800 transition-all duration-300 relative group-hover:-translate-y-1">
                  <div class="absolute top-5 -left-2 w-4 h-4 bg-white dark:bg-neutral-800/50 border-l border-b border-gray-100 dark:border-neutral-700 transform rotate-45 group-hover:border-rose-200 dark:group-hover:border-rose-800 transition-colors duration-300"></div>
                  
                  <h3 class="font-heading font-bold text-lg text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2">
                    FASE 3: O CLÍNICO
                    <span class="text-xs font-normal px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">O Tratamento</span>
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    O foco é o paciente. Você aprenderá Psicanálise, Sistêmica e Neurociência para tratar casos de ansiedade, depressão e traumas.
                  </p>
                </div>
              </div>

              <!-- FASE 4 -->
              <div class="relative flex items-start group">
                <div class="absolute left-0 w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 border-4 border-white dark:border-brand-black flex items-center justify-center text-xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 ring-1 ring-amber-100 dark:ring-amber-900/50">
                  <span class="relative z-10">🟡</span>
                </div>
                
                <div class="ml-16 flex-1 bg-white dark:bg-neutral-800/50 p-6 rounded-2xl border border-gray-100 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 relative group-hover:-translate-y-1">
                  <div class="absolute top-5 -left-2 w-4 h-4 bg-white dark:bg-neutral-800/50 border-l border-b border-gray-100 dark:border-neutral-700 transform rotate-45 group-hover:border-amber-200 dark:group-hover:border-amber-800 transition-colors duration-300"></div>
                  
                  <h3 class="font-heading font-bold text-lg text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                    FASE 4: O PROFISSIONAL
                    <span class="text-xs font-normal px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">O Negócio</span>
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    O foco é a sua conta bancária. Postura, ética, precificação e vendas para lotar sua agenda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red-50 dark:bg-red-900/10 p-4 md:p-6 rounded-lg border-l-4 border-brand-red my-8">
          <p class="font-bold text-brand-red text-lg mb-2">⚠️ Regra de Ouro: Não pule a Fase 1.</p>
          <p>Ela é a fundação da sua autoridade.</p>
        </div>

        <p class="text-xl font-medium text-center mt-12 mb-8">
          Assista ao vídeo acima para entender os detalhes e, em seguida, embarque no Módulo 01.<br>
          <span class="text-brand-red block mt-2">Sua nova vida começa agora.</span>
        </p>
      </div>
    `,
  },
  2: {
    [TabOption.COURSE]: "Conteúdo sobre doenças psicossomáticas e a relação com os traços de caráter.",
  },
  3: {
    [TabOption.COURSE]: "Demonstração prática de análise ao vivo com voluntários.",
  },
  4: {
    [TabOption.COURSE]: "Estratégias de carreira, precificação e posicionamento de mercado.",
  }
};