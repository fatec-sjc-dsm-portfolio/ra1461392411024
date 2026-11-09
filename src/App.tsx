type IconName = 'arrow' | 'external' | 'mail' | 'github' | 'linkedin' | 'download' | 'spark'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  if (name === 'arrow') return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  if (name === 'external') return <svg {...common}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  if (name === 'github') return <svg {...common} fill="currentColor" stroke="none"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.17 1.72 1.17 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.54 0-1.22.43-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.08 1.14a10.75 10.75 0 0 1 5.6 0c2.13-1.44 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.31-2.62 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" /></svg>
  if (name === 'linkedin') return <svg {...common} fill="currentColor" stroke="none"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.94V9.13h2.99v9.37ZM6.44 7.85a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.06 10.65h-2.98v-4.56c0-1.09-.02-2.5-1.53-2.5-1.53 0-1.76 1.2-1.76 2.42v4.64H9.25V9.13h2.86v1.28h.04c.4-.75 1.37-1.53 2.82-1.53 3.02 0 3.58 1.99 3.58 4.58v5.04h-.05Z" /></svg>
  if (name === 'download') return <svg {...common}><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M4 17v3h16v-3" /></svg>
  return <svg {...common}><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></svg>
}

const projects = [
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
]

const skillGroups = [
  { name: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Python'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn/UI'] },
  { name: 'Backend & APIs', items: ['Node.js', 'Express', 'Fastify', 'FastAPI', 'REST', 'Microsserviços'] },
  { name: 'Dados & infraestrutura', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Nginx'] },
  { name: 'Integrações & ferramentas', items: ['Mercado Pago', 'Resend', 'Git', 'GitHub', 'GitLab'] },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#pessoal" aria-label="Gabriel Oliveira, início">
            <span>Gabriel Oliveira<span className="brand-period">.</span></span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#pessoal">Pessoal</a>
            <a href="#academica">Acadêmica</a>
            <a href="#profissional">Profissional</a>
          </nav>
          <a className="header-contact" href="mailto:gabrielsoliveira1606@gmail.com">
            Vamos conversar <Icon name="arrow" size={15} />
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="personal-section section-shell" id="pessoal" aria-labelledby="personal-title">
          <div className="hero-topline">
            <span className="eyebrow"><span className="eyebrow-dot" /> Portfólio · 2026</span>
            <span className="location-label">São José dos Campos <span aria-hidden="true">/</span> SP</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">DESENVOLVIMENTO DE SOFTWARE · DSM</p>
              <h1 id="personal-title">Gabriel<br /><span>Oliveira</span><i>.</i></h1>
              <p className="hero-lede">Desenvolvedor full stack em formação. Construo aplicações que conectam <em>ideias, pessoas e soluções reais.</em></p>
              <div className="hero-actions">
                <a className="button button-primary" href="#academica">Conheça minha trajetória <Icon name="arrow" /></a>
                <a className="button button-secondary" href="mailto:gabrielsoliveira1606@gmail.com"><Icon name="mail" /> Entre em contato</a>
              </div>
            </div>
            <div className="hero-art" aria-label="Resumo da trajetória">
              <div className="art-grid" aria-hidden="true" />
              <div className="art-orbit orbit-one" aria-hidden="true" />
              <div className="art-orbit orbit-two" aria-hidden="true" />
              <div className="art-core">
                <img className="profile-portrait" src={`${import.meta.env.BASE_URL}perfil.png`} alt="Gabriel Oliveira" />
              </div>
              <div className="orbit-label label-top">CÓDIGO COM PROPÓSITO</div>
              <div className="orbit-label label-bottom">FATEC · DSM</div>
              <div className="art-coordinate">23°10′ S<br />45°53′ O</div>
            </div>
          </div>

          <div className="personal-lower">
            <article className="intro-card">
              <span className="section-index">01 / PESSOAL</span>
              <div>
                <h2>Curiosidade que<br />vira <em>construção.</em></h2>
                <p>Sou estudante de Desenvolvimento de Software Multiplataforma na Fatec São José dos Campos e desenvolvedor full stack. Gosto de explorar tecnologias, entender problemas e criar aplicações que tenham utilidade no mundo real.</p>
              </div>
            </article>
            <aside className="outside-card">
              <span className="micro-label">FORA DO CÓDIGO</span>
              <h3>Outros interesses,<br />novas perspectivas.</h3>
              <div className="interest-list" aria-label="Interesses pessoais">
                <span>Basquete</span><span>Música</span><span>Jogos de cartas</span><span>Séries & animes</span><span>Jogos de estratégia</span>
              </div>
              <div className="sparkle"><Icon name="spark" size={22} /></div>
            </aside>
          </div>

          <div className="contact-strip">
            <div><span className="micro-label">CONTATO</span><p>Aberto a conversas, ideias e oportunidades.</p></div>
            <div className="social-links">
              <a href="mailto:gabrielsoliveira1606@gmail.com" aria-label="Enviar e-mail"><Icon name="mail" /> <span>E-mail</span></a>
              <a href="https://github.com/Tico1606" target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Oliveira"><Icon name="github" /> <span>GitHub</span><Icon name="external" size={13} /></a>
              <a href="https://www.linkedin.com/in/gabriel-oliveira-884ba5282/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Oliveira"><Icon name="linkedin" /> <span>LinkedIn</span><Icon name="external" size={13} /></a>
            </div>
          </div>
        </section>

        <section className="academic-section section-shell" id="academica" aria-labelledby="academic-title">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / ACADÊMICA</span>
              <h2 id="academic-title">Aprender <em>fazendo.</em></h2>
            </div>
            <p>Projetos integradores desenvolvidos na Fatec, em parceria com clientes e desafios de diferentes áreas.</p>
          </div>

          <div className="education-band">
            <div className="education-icon">DSM</div>
            <div className="education-info">
              <span className="micro-label">FORMAÇÃO EM ANDAMENTO · 2024 — 2026</span>
              <h3>Desenvolvimento de Software Multiplataforma</h3>
              <p>Fatec Prof. Jessen Vidal · São José dos Campos</p>
            </div>
            <div className="education-status"><span /> Em andamento</div>
          </div>

          <div className="projects-heading">
            <span className="micro-label">PROJETOS INTEGRADORES</span>
            <span className="project-count">05 SEMESTRES <b>·</b> 05 PROJETOS</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <details className={`project-card ${project.className}`} key={project.number}>
                <summary>
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol" aria-hidden="true">{project.monogram}</span>
                  <span className="project-main">
                    <span className="project-meta">{project.semester} <span>·</span> {project.kind}</span>
                    <span className="project-title">{project.name}</span>
                    <span className="project-summary">{project.summary}</span>
                  </span>
                  <span className="project-open" aria-hidden="true"><Icon name="arrow" /></span>
                </summary>
                <div className="project-detail">
                  <div className="detail-copy">
                    <div><span className="micro-label">O DESAFIO</span><p>{project.challenge}</p></div>
                    <div><span className="micro-label">A SOLUÇÃO</span><p>{project.solution}</p></div>
                    <div><span className="micro-label">MINHA CONTRIBUIÇÃO</span><p>{project.contribution}</p></div>
                  </div>
                  <div className="detail-side">
                    <span className="micro-label">TECNOLOGIAS</span>
                    <div className="tag-list">{project.stack.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
                    <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">Ver repositório <Icon name="external" size={15} /></a>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="technical-course">
            <span className="technical-marker">ETEC</span>
            <p><span className="micro-label">FORMAÇÃO TÉCNICA · 2022 — 2023</span><br /><strong>Técnico em Desenvolvimento de Sistemas</strong><br />Etec Prof.ª Ilza Nascimento Pintus · São José dos Campos</p>
          </div>
        </section>

        <section className="professional-section section-shell" id="profissional" aria-labelledby="professional-title">
          <div className="section-heading professional-heading">
            <div>
              <span className="section-index">03 / PROFISSIONAL</span>
              <h2 id="professional-title">Do conhecimento<br />à <em>entrega.</em></h2>
            </div>
            <p>Atuação em produtos SaaS e plataformas operacionais, do planejamento técnico à construção de APIs, interfaces e integrações.</p>
          </div>

          <div className="career-layout">
            <div className="career-list">
              <article className="career-item">
                <div className="career-date"><span>JUL/2026</span><i>—</i><span>ATUAL</span></div>
                <div className="career-content">
                  <div className="career-title-row"><div><h3>Desenvolvedor Fullstack</h3><p className="company">Data Fintech Solutions <span>·</span> São José dos Campos, SP</p></div><span className="career-arrow"><Icon name="arrow" size={18} /></span></div>
                  <p className="career-description">Desenvolvo uma plataforma SaaS financeira multiempresa para gestão de indicadores, demonstrativos contábeis, fluxo de caixa, ativos, orçamentos e cobranças. Trabalho em microsserviços, autenticação e permissões por plano, processamento assíncrono de planilhas com Python e Redis, integrações com Mercado Pago e Resend e consultas financeiras com IA em linguagem natural.</p>
                  <div className="career-tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>MongoDB</span><span>Redis</span><span>Python</span></div>
                </div>
              </article>
              <article className="career-item">
                <div className="career-date"><span>FREELANCER</span></div>
                <div className="career-content">
                  <div className="career-title-row"><div><h3>Desenvolvedor Full-stack Freelancer</h3><p className="company">CTP Soluções <span>·</span> Plataforma operacional</p></div><span className="career-arrow"><Icon name="arrow" size={18} /></span></div>
                  <p className="career-description">Desenvolvi uma plataforma para automatizar e centralizar processos internos, solicitações de clientes e pedidos de produção. O sistema reduziu etapas manuais e facilitou o acompanhamento e processamento dos pedidos. Trabalhei em um monorepo TypeScript com Next.js no frontend e Elysia no backend, autenticação JWT em cookies httpOnly, Drizzle com PostgreSQL e integrações com Google Drive, Bling e Resend.</p>
                  <div className="career-tags"><span>TypeScript</span><span>Next.js</span><span>Elysia</span><span>Drizzle</span><span>PostgreSQL</span><span>Zod</span><span>Vitest</span><span>Google Drive API</span><span>Bling API</span><span>Resend</span></div>
                </div>
              </article>
              <article className="career-item">
                <div className="career-date"><span>NOV/2025</span><i>—</i><span>JUL/2026</span></div>
                <div className="career-content">
                  <div className="career-title-row"><div><h3>Estagiário de Desenvolvimento Fullstack</h3><p className="company">Axtier <span>·</span> São José dos Campos, SP</p></div><span className="career-arrow"><Icon name="arrow" size={18} /></span></div>
                  <p className="career-description">Contribuí para uma plataforma B2B desde o planejamento técnico até a implementação. Participei da estruturação do banco PostgreSQL, da configuração do ambiente Docker, do desenvolvimento frontend com Next.js e Shadcn/UI e da criação de APIs com Fastify.</p>
                  <div className="career-tags"><span>PostgreSQL</span><span>Docker</span><span>Next.js</span><span>Shadcn/UI</span><span>Fastify</span></div>
                </div>
              </article>
            </div>

            <aside className="skills-panel">
              <div className="skills-panel-top"><span className="micro-label">HABILIDADES DO CURRÍCULO</span><span className="skills-mark">2026</span></div>
              <h3>Tecnologias que<br /><em>colocam ideias de pé.</em></h3>
              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.name}>
                    <span className="micro-label">{group.name}</span>
                    <div className="skills-list">{group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
                  </div>
                ))}
              </div>
              <div className="certificate-note">
                <span className="micro-label">FORMAÇÃO COMPLEMENTAR · AGO/2026</span>
                <strong>AWS Cloud Practitioner Essentials (Português)</strong>
                <span>AWS Training &amp; Certification</span>
              </div>
            </aside>
          </div>

          <div className="closing-note">
            <span className="closing-mark">GO<span>.</span></span>
            <p>Obrigado por chegar até aqui.<br /><em>Vamos construir algo?</em></p>
            <a href="mailto:gabrielsoliveira1606@gmail.com" aria-label="Enviar um e-mail para Gabriel Oliveira"><Icon name="mail" /><span>Escreva para mim</span><Icon name="arrow" /></a>
          </div>
          <footer className="site-footer"><span>© 2026 Gabriel Oliveira</span><span>Feito com intenção <b>·</b> São José dos Campos, SP</span><a href="#pessoal">Voltar ao início ↑</a></footer>
        </section>
      </main>
    </>
  )
}

export default App
