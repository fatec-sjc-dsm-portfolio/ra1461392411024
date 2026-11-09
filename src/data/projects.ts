export interface Project {
  number: string
  semester: string
  name: string
  kind: string
  summary: string
  challenge: string
  solution: string
  contribution: string
  stack: string[]
  url: string
  monogram: string
  className: string
}

export const projects: Project[] = [
  {
    number: '01',
    semester: '1º semestre · 2024/1',
    name: 'Smart Farming',
    kind: 'Plataforma web · Agricultura',
    summary: 'Uma estufa inteligente precisava de uma forma mais simples de registrar e acompanhar os dados coletados pelos sensores.',
    challenge: 'O acompanhamento era feito com arquivos CSV, cartões microSD e planilhas, o que dificultava a consulta remota e a análise histórica dos dados.',
    solution: 'A equipe desenvolveu uma aplicação para organizar registros de sensores e checklists e apresentar a evolução da estufa em tabelas e gráficos interativos.',
    contribution: 'Contribuí para a experiência da aplicação desde o design: participei das decisões de UI/UX, implementei as telas e trabalhei na comunicação do frontend com a API para conectar as interfaces aos dados da estufa.',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'Tailwind CSS', 'ApexCharts', 'Docker'],
    url: 'https://github.com/CtrI-Alt-Del/smart-farming',
    monogram: 'SF',
    className: 'farming',
  },
  {
    number: '02',
    semester: '2º semestre · 2024/2',
    name: 'Stocker',
    kind: 'Sistema web · Gestão de estoque',
    summary: 'Uma aplicação para simplificar o controle de produtos, quantidades e informações de estoque.',
    challenge: 'Manter o inventário organizado exige acompanhar produtos e atualizações sem perder consistência entre as operações do sistema.',
    solution: 'O projeto reuniu recursos de gestão de estoque em uma aplicação web, com operações de backend para manter os dados e apoiar o fluxo de uso.',
    contribution: 'Minha atuação foi principalmente no backend, onde desenvolvi a API que dá suporte aos fluxos do sistema de estoque. Também participei do design da aplicação, colaborando para que a experiência visual acompanhasse as necessidades de gestão.',
    stack: ['React', 'TypeScript', 'Next.js', 'Prisma', 'Supabase'],
    url: 'https://github.com/CtrI-Alt-Del/stocker',
    monogram: 'ST',
    className: 'stocker',
  },
  {
    number: '03',
    semester: '3º semestre · 2025/1',
    name: 'Chronos',
    kind: 'Sistema web · Gestão do tempo',
    summary: 'Uma ferramenta para equipes registrarem horas, organizarem tarefas e consultarem relatórios de trabalho.',
    challenge: 'Acompanhar o tempo dedicado às atividades e consolidar informações em relatórios pede um fluxo claro para toda a equipe.',
    solution: 'A equipe criou uma plataforma de controle de tempo para registrar horas e tarefas e reunir os dados em relatórios.',
    contribution: 'Atuei principalmente como Scrum Master, apoiando a organização do trabalho e o acompanhamento das entregas da equipe. Também colaborei no design das interfaces e no desenvolvimento do frontend.',
    stack: ['React', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'MongoDB'],
    url: 'https://github.com/CtrI-Alt-Del/chronos',
    monogram: 'CH',
    className: 'chronos',
  },
  // Projetos reservados para uma versão futura do portfólio:
  /*
  {
    number: '04',
    semester: '4º semestre · 2025/2',
    name: 'Gaia',
    kind: 'Plataforma web · Monitoramento ambiental',
    summary: 'Uma plataforma para receber dados de estações meteorológicas e torná-los úteis em painéis e relatórios.',
    challenge: 'A Tecsus buscava ampliar o monitoramento ambiental com estações de baixo custo e visualizações que ajudassem a interpretar os dados.',
    solution: 'A equipe desenvolveu um fluxo de coleta, processamento e apresentação de dados meteorológicos, além de uma experiência web com conteúdo educativo.',
    contribution: 'Contribuí nas duas frentes da aplicação: criei telas e implementei recursos no frontend, além de desenvolver a API no backend para integrar os dados do projeto.',
    stack: ['Node.js', 'NestJS', 'MQTT', 'MongoDB', 'PostgreSQL', 'Remix', 'Astro', 'Docker'],
    url: 'https://github.com/CtrI-Alt-Del/gaia',
    monogram: 'GA',
    className: 'gaia',
  },
  {
    number: '05',
    semester: '5º semestre · 2026/1',
    name: 'Animus',
    kind: 'Aplicativo mobile · IA aplicada ao Direito',
    summary: 'Um aplicativo que usa IA para resumir petições e localizar precedentes jurídicos relacionados.',
    challenge: 'Encontrar precedentes relevantes em diferentes tribunais pode consumir tempo diante do volume de decisões e documentos jurídicos.',
    solution: 'A proposta combina análise de texto, busca semântica e dados estruturados para apoiar a pesquisa de precedentes em dispositivos móveis.',
    contribution: 'Atuei como Scrum Master e desenvolvedor cloud. Além de apoiar a organização da equipe, implementei a infraestrutura como código com Pulumi e publiquei os serviços na Google Cloud Platform (GCP).',
    stack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Qdrant', 'Gemini', 'Pulumi', 'Google Cloud'],
    url: 'https://github.com/CtrI-Alt-Del/animus',
    monogram: 'AN',
    className: 'animus',
  },
  */
]
