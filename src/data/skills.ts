export interface SkillGroup {
  name: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { name: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Python'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn/UI'] },
  { name: 'Backend & APIs', items: ['Node.js', 'Express', 'Fastify', 'FastAPI', 'REST', 'Microsserviços'] },
  { name: 'Dados & infraestrutura', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Nginx'] },
  { name: 'Integrações & ferramentas', items: ['Mercado Pago', 'Resend', 'Git', 'GitHub', 'GitLab'] },
]
