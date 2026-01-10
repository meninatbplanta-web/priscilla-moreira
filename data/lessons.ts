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
      { "titulo": "A Jornada do Herói e o Curador Ferido", "duracao": null },
      { "titulo": "O Código de Honra e Ética", "duracao": null },
      { "titulo": "Meta-Learning: A Ciência da Aprendizagem Acelerada", "duracao": null },
      { "titulo": "A Neutralidade Compassiva", "duracao": null },
      { "titulo": "O Poder do Ambiente (Comunidade)", "duracao": null }
    ]
  },
  {
    "id": 2,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "A ENGENHARIA DA REALIDADE",
    "aulas": [
      { "titulo": "A Estrutura do Ego: Persona, Sombra e Self", "duracao": null },
      { "titulo": "O Fim da Vítima (Saindo do Triângulo Dramático)", "duracao": null },
      { "titulo": "A Mecânica da Projeção e do Espelho", "duracao": null },
      { "titulo": "O Vício Emocional e a Bioquímica do Sofrimento", "duracao": null },
      { "titulo": "A Arte da Ressignificação", "duracao": null }
    ]
  },
  {
    "id": 3,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "ARQUEOLOGIA DO SELF (A CRIANÇA INTERIOR)",
    "aulas": [
      { "titulo": "O Mapa das 5 Feridas Emocionais", "duracao": null },
      { "titulo": "Diagnóstico: A Criança Ferida no Comando", "duracao": null },
      { "titulo": "Lealdades Invisíveis e Amor Cego", "duracao": null },
      { "titulo": "Vivência Guiada: O Resgate (Prática)", "duracao": null },
      { "titulo": "O Caminho da Gratidão Real", "duracao": null }
    ]
  },
  {
    "id": 4,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "BIOHACKING E REGULAÇÃO DO SISTEMA NERVOSO",
    "aulas": [
      { "titulo": "A Biologia da Emoção (Teoria Polivagal Descomplicada)", "duracao": null },
      { "titulo": "Expandindo a Janela de Tolerância", "duracao": null },
      { "titulo": "Grounding Avançado e Bioenergética", "duracao": null },
      { "titulo": "O Corpo como Recurso de Autoridade", "duracao": null },
      { "titulo": "Higiene do Sono e Rotina de Alta Performance", "duracao": null }
    ]
  },
  {
    "id": 5,
    "phase": "FASE 1: O DESPERTAR (A Blindagem do Terapeuta)",
    "titulo": "AS LEIS DO INCONSCIENTE (INTRODUÇÃO SISTÊMICA)",
    "aulas": [
      { "titulo": "O Campo Morfogenético", "duracao": null },
      { "titulo": "As 3 Leis do Amor (Aplicadas ao Individual)", "duracao": null },
      { "titulo": "Pai e Mãe: As Fontes da Vida e do Sucesso", "duracao": null },
      { "titulo": "Emaranhamentos Sistêmicos", "duracao": null },
      { "titulo": "A Virada de Chave: De Paciente a Analista", "duracao": null }
    ]
  },

  // --- FASE 2: O ANALISTA ---
  {
    "id": 6,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "FUNDAMENTOS DA BIOLOGIA DO COMPORTAMENTO",
    "aulas": [
      { "titulo": "A História da Leitura Corporal", "duracao": null },
      { "titulo": "Embriologia e Mielinização: A Fábrica de Caracteres", "duracao": null },
      { "titulo": "Trauma de Desenvolvimento vs. Trauma de Choque", "duracao": null },
      { "titulo": "O Conceito de Recurso e Dor", "duracao": null },
      { "titulo": "Treinando o Olhar Clínico (Calibragem)", "duracao": null }
    ]
  },
  {
    "id": 7,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO ESQUIZOIDE (A Mente Criativa)",
    "aulas": [
      { "titulo": "Gênese do Esquizoide (Gestação e Rejeição)", "duracao": null },
      { "titulo": "Anatomia do Esquizoide (Leitura Visual)", "duracao": null },
      { "titulo": "A Dor da Rejeição e a Caverna", "duracao": null },
      { "titulo": "O Recurso da Criatividade e Lógica", "duracao": null },
      { "titulo": "Manejo e Tratamento do Esquizoide", "duracao": null }
    ]
  },
  {
    "id": 8,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO ORAL (A Conexão Sensorial)",
    "aulas": [
      { "titulo": "Gênese do Oral (Amamentação e Abandono)", "duracao": null },
      { "titulo": "Anatomia do Oral (Leitura Visual)", "duracao": null },
      { "titulo": "A Dor do Abandono e o Vazio Existencial", "duracao": null },
      { "titulo": "O Recurso da Comunicação e Acolhimento", "duracao": null },
      { "titulo": "Manejo e Tratamento do Oral", "duracao": null }
    ]
  },
  {
    "id": 9,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO PSICOPATA (O Líder Articulador)",
    "aulas": [
      { "titulo": "Gênese do Psicopata (Primeiros Passos e Manipulação)", "duracao": null },
      { "titulo": "Anatomia do Psicopata (Leitura Visual)", "duracao": null },
      { "titulo": "A Dor da Manipulação e a Desconfiança", "duracao": null },
      { "titulo": "O Recurso da Liderança e Negociação", "duracao": null },
      { "titulo": "Manejo e Tratamento do Psicopata", "duracao": null }
    ]
  },
  {
    "id": 10,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO MASOQUISTA (O Executor Consistente)",
    "aulas": [
      { "titulo": "Gênese do Masoquista (Desfralde e Humilhação)", "duracao": null },
      { "titulo": "Anatomia do Masoquista (Leitura Visual)", "duracao": null },
      { "titulo": "A Dor da Humilhação e a Panela de Pressão", "duracao": null },
      { "titulo": "O Recurso da Planejamento e Lealdade", "duracao": null },
      { "titulo": "Manejo e Tratamento do Masoquista", "duracao": null }
    ]
  },
  {
    "id": 11,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O TRAÇO RÍGIDO (O Realizador Ágil)",
    "aulas": [
      { "titulo": "Gênese do Rígido (Fase Edípica e Traição)", "duracao": null },
      { "titulo": "Anatomia do Rígido (Leitura Visual)", "duracao": null },
      { "titulo": "A Dor da Traição e a Comparação", "duracao": null },
      { "titulo": "O Recurso da Agilidade e Proatividade", "duracao": null },
      { "titulo": "Manejo e Tratamento do Rígido", "duracao": null }
    ]
  },
  {
    "id": 12,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "O MÉTODO DE INTEGRAÇÃO (Exclusivo)",
    "aulas": [
      { "titulo": "A Dinâmica dos Traços (Combinações)", "duracao": null },
      { "titulo": "Integração dos 3 Pilares (Traço + Criança + Sistema)", "duracao": null },
      { "titulo": "A Hierarquia da Dor", "duracao": null },
      { "titulo": "O \"Mapa do Inferno\" vs. O \"Mapa do Céu\"", "duracao": null },
      { "titulo": "Estudos de Caso Complexos", "duracao": null }
    ]
  },
  {
    "id": 13,
    "phase": "FASE 2: O ANALISTA (A Técnica de Leitura Corporal)",
    "titulo": "A FERRAMENTA DE MAPEAMENTO E ANAMNESE",
    "aulas": [
      { "titulo": "A Ferramenta Gráfica (O Gráfico de Traços)", "duracao": null },
      { "titulo": "A Anamnese Estratégica", "duracao": null },
      { "titulo": "O Roteiro da Primeira Sessão de Análise", "duracao": null },
      { "titulo": "A Devolutiva Impactante", "duracao": null },
      { "titulo": "Transição para a Terapia (Venda da Fase 3)", "duracao": null }
    ]
  },

  // --- FASE 3: O CLÍNICO ---
  {
    "id": 14,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "A ENGENHARIA DO INCONSCIENTE (Psicanálise)",
    "aulas": [
      { "titulo": "O Aparelho Psíquico (Id, Ego e Superego)", "duracao": null },
      { "titulo": "As Couraças Musculares (De Reich a Lowen)", "duracao": null },
      { "titulo": "Mecanismos de Defesa do Ego", "duracao": null },
      { "titulo": "Interpretação de Sonhos e Símbolos", "duracao": null },
      { "titulo": "Pulsões de Vida e Morte", "duracao": null }
    ]
  },
  {
    "id": 15,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "INTELIGÊNCIA SISTÊMICA (Leis do Amor)",
    "aulas": [
      { "titulo": "As Ordens da Ajuda (Postura do Terapeuta)", "duracao": null },
      { "titulo": "A Boa e a Má Consciência", "duracao": null },
      { "titulo": "Tomando Pai e Mãe (A Fonte da Força)", "duracao": null },
      { "titulo": "Masculino e Feminino Feridos", "duracao": null },
      { "titulo": "Constelação na Cadeira (Exercícios Individuais)", "duracao": null }
    ]
  },
  {
    "id": 16,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "NEUROCIÊNCIA DO TRAUMA",
    "aulas": [
      { "titulo": "A Anatomia do Trauma", "duracao": null },
      { "titulo": "Neuroplasticidade e a Velocidade da Cura", "duracao": null },
      { "titulo": "Investigação Compassiva e Camadas do Trauma", "duracao": null },
      { "titulo": "Psicoeducação: Ensinando o Cliente a se Entender", "duracao": null },
      { "titulo": "Metáforas Terapêuticas", "duracao": null }
    ]
  },
  {
    "id": 17,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "PROTOCOLOS CLÍNICOS I – ANSIEDADE E MEDO",
    "aulas": [
      { "titulo": "Decodificando a Ansiedade (Visão Corporal e Sistêmica)", "duracao": null },
      { "titulo": "\"Tudo o que temo me sobrevém\" (O Medo Antecipatório)", "duracao": null },
      { "titulo": "Manejo de Crise em Sessão", "duracao": null },
      { "titulo": "Ferramentas de Dissolução do Medo", "duracao": null },
      { "titulo": "Protocolo Prático: Ansiedade Zero", "duracao": null }
    ]
  },
  {
    "id": 18,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "PROTOCOLOS CLÍNICOS II – DEPRESSÃO E CRENÇAS",
    "aulas": [
      { "titulo": "A Depressão sob a Ótica da Análise Corporal", "duracao": null },
      { "titulo": "Visão Sistêmica da Depressão", "duracao": null },
      { "titulo": "Crenças Limitantes: A Raiz Mental", "duracao": null },
      { "titulo": "Reprogramação de Crenças e Traumas", "duracao": null },
      { "titulo": "Protocolo de Retorno à Vida", "duracao": null }
    ]
  },
  {
    "id": 19,
    "phase": "FASE 3: O CLÍNICO (Tratamento Profundo)",
    "titulo": "LEITURA AVANÇADA E A VERDADE",
    "aulas": [
      { "titulo": "Emoções Primárias vs. Emoções Sociais", "duracao": null },
      { "titulo": "A Incongruência: Quando a Boca diz Sim e o Corpo diz Não", "duracao": null },
      { "titulo": "Leitura de Ambientes e Dinâmicas de Grupo", "duracao": null },
      { "titulo": "O Corpo na Mentira e na Ocultação", "duracao": null },
      { "titulo": "Devolvendo a Verdade", "duracao": null }
    ]
  },

  // --- FASE 4: O PROFISSIONAL ---
  {
    "id": 20,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "POSICIONAMENTO E IDENTIDADE",
    "aulas": [
      { "titulo": "Paciente ou Cliente? (Posicionamento)", "duracao": null },
      { "titulo": "Compaixão x Empatia x Piedade", "duracao": null },
      { "titulo": "Ética e Responsabilidade Legal", "duracao": null },
      { "titulo": "O \"Setting\" Terapêutico", "duracao": null },
      { "titulo": "Normas de um Atendimento de Excelência", "duracao": null }
    ]
  },
  {
    "id": 21,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "A SESSÃO PERFEITA",
    "aulas": [
      { "titulo": "Rapport Instantâneo e Conexão", "duracao": null },
      { "titulo": "Escuta Ativa e Presença Plena", "duracao": null },
      { "titulo": "Gestão de Conflitos e Resistências", "duracao": null },
      { "titulo": "Sinais de Interesse e Desinteresse", "duracao": null },
      { "titulo": "Fechamento e Âncoras", "duracao": null }
    ]
  },
  {
    "id": 22,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "VENDA, PRECIFICAÇÃO E RETENÇÃO",
    "aulas": [
      { "titulo": "A Psicologia da Precificação (Quanto vale a sua hora?)", "duracao": null },
      { "titulo": "Vendendo Processos, Não Horas (LTV)", "duracao": null },
      { "titulo": "O Script de Vendas Terapêutico", "duracao": null },
      { "titulo": "\"Você quer o resultado ou a caminhada?\"", "duracao": null },
      { "titulo": "Fidelização e Indicações", "duracao": null }
    ]
  },
  {
    "id": 23,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "EXPANSÃO DE CARREIRA",
    "aulas": [
      { "titulo": "Leitura Corporal Corporativa (B2B)", "duracao": null },
      { "titulo": "Terapia em Grupo e Workshops", "duracao": null },
      { "titulo": "Atendimento Online: Quebrando Fronteiras", "duracao": null },
      { "titulo": "Palestras e Treinamentos", "duracao": null }
    ]
  },
  {
    "id": 24,
    "phase": "FASE 4: O PROFISSIONAL (Carreira e Negócios)",
    "titulo": "O CAMINHO DO MESTRE (CONCLUSÃO)",
    "aulas": [
      { "titulo": "A Importância da Supervisão Clínica", "duracao": null },
      { "titulo": "O Que Mais Estudar? (Bibliografia)", "duracao": null },
      { "titulo": "Transição de Carreira Segura", "duracao": null },
      { "titulo": "Mensagem Final e Certificação", "duracao": null }
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
      <div class="max-w-4xl mx-auto space-y-8 p-6 text-gray-800 dark:text-gray-200">
        <h1 class="text-3xl font-bold text-center text-brand-red mb-8">O Mapa da Sua Evolução: Entenda como Funciona a Formação</h1>
        
        <p class="text-lg leading-relaxed">
          Seja muito bem-vindo(a) à <strong>Formação Terapeuta Analista Corporal</strong>.<br><br>
          Você acaba de dar o passo mais importante da sua carreira. Mas atenção: este não é um curso comum onde você apenas "assiste aulas". Esta é uma <strong>Jornada de Transformação em 4 Níveis</strong>.
        </p>

        <p class="text-lg leading-relaxed">
          Nós desenhamos essa estrutura para que você não seja apenas um "leitor de corpos", mas um <strong>Terapeuta de Elite</strong>, capaz de tratar traumas profundos e viver muito bem dessa profissão.
        </p>

        <div class="bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-xl border border-gray-100 dark:border-neutral-800 shadow-sm my-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Como funciona a sua Jornada?</h2>
          <p class="mb-6">O curso é dividido em 4 Fases Sequenciais. É fundamental que você respeite essa ordem:</p>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-2xl">🟢</div>
              <div>
                <h3 class="font-bold text-lg text-emerald-600 dark:text-emerald-400">FASE 1: O DESPERTAR (Você)</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-1">O foco é a sua cura. Você não pode levar um cliente onde você nunca foi. Aqui, preparamos seu emocional e seu sistema nervoso para sustentar a profissão.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-2xl">🔵</div>
              <div>
                <h3 class="font-bold text-lg text-blue-600 dark:text-blue-400">FASE 2: O ANALISTA (A Técnica)</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-1">O foco é a ferramenta. Aqui você domina a Leitura Corporal, os Traços de Caráter e o nosso método exclusivo de mapeamento.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-2xl">🟣</div>
              <div>
                <h3 class="font-bold text-lg text-purple-600 dark:text-purple-400">FASE 3: O CLÍNICO (O Tratamento)</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-1">O foco é o paciente. Você aprenderá Psicanálise, Sistêmica e Neurociência para tratar casos de ansiedade, depressão e traumas.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-2xl">🟡</div>
              <div>
                <h3 class="font-bold text-lg text-amber-600 dark:text-amber-400">FASE 4: O PROFISSIONAL (O Negócio)</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-1">O foco é a sua conta bancária. Postura, ética, precificação e vendas para lotar sua agenda.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border-l-4 border-brand-red my-8">
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