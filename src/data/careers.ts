export interface CareerEntry {
  period: string[]
  title: string
  company: string
  context: string
  description: string
  technologies: string[]
}

export const careers: CareerEntry[] = [
  {
    period: ['JUL/2026', 'ATUAL'],
    title: 'Desenvolvedor Fullstack',
    company: 'Data Fintech Solutions',
    context: 'São José dos Campos, SP',
    description: 'Desenvolvo uma plataforma SaaS financeira multiempresa para gestão de indicadores, demonstrativos contábeis, fluxo de caixa, ativos, orçamentos e cobranças. Trabalho em microsserviços, autenticação e permissões por plano, processamento assíncrono de planilhas com Python e Redis, integrações com Mercado Pago e Resend e consultas financeiras com IA em linguagem natural.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'Python'],
  },
  {
    period: ['FREELANCER'],
    title: 'Desenvolvedor Full-stack Freelancer',
    company: 'CTP Soluções',
    context: 'Plataforma operacional',
    description: 'Desenvolvi uma plataforma para automatizar e centralizar processos internos, solicitações de clientes e pedidos de produção. O sistema reduziu etapas manuais e facilitou o acompanhamento e processamento dos pedidos. Trabalhei em um monorepo TypeScript com Next.js no frontend e Elysia no backend, autenticação JWT em cookies httpOnly, Drizzle com PostgreSQL e integrações com Google Drive, Bling e Resend.',
    technologies: ['TypeScript', 'Next.js', 'Elysia', 'Drizzle', 'PostgreSQL', 'Zod', 'Vitest', 'Google Drive API', 'Bling API', 'Resend'],
  },
  {
    period: ['NOV/2025', 'JUL/2026'],
    title: 'Estagiário de Desenvolvimento Fullstack',
    company: 'Axtier',
    context: 'São José dos Campos, SP',
    description: 'Contribuí para uma plataforma B2B desde o planejamento técnico até a implementação. Participei da estruturação do banco PostgreSQL, da configuração do ambiente Docker, do desenvolvimento frontend com Next.js e Shadcn/UI e da criação de APIs com Fastify.',
    technologies: ['PostgreSQL', 'Docker', 'Next.js', 'Shadcn/UI', 'Fastify'],
  },
]
