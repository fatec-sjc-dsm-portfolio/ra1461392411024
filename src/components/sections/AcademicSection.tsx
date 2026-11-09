import { projects } from '../../data/projects'
import { Label } from '../primitives/Label'
import { ProjectCard } from './ProjectCard'

export function AcademicSection() {
  const projectCount = String(projects.length).padStart(2, '0')

  return (
    <section className="academic-section section-shell" id="academica" aria-labelledby="academic-title">
      <div className="section-heading">
        <div>
          <Label variant="index">02 / ACADÊMICA</Label>
          <h2 id="academic-title">Aprender <em>fazendo.</em></h2>
        </div>
        <p>Projetos integradores desenvolvidos na Fatec, em parceria com clientes e desafios de diferentes áreas.</p>
      </div>

      <div className="education-band">
        <div className="education-icon">DSM</div>
        <div className="education-info">
          <Label>FORMAÇÃO EM ANDAMENTO · 2024 — 2026</Label>
          <h3>Desenvolvimento de Software Multiplataforma</h3>
          <p>Fatec Prof. Jessen Vidal · São José dos Campos</p>
        </div>
        <div className="education-status"><span /> Em andamento</div>
      </div>

      <div className="projects-heading">
        <Label>PROJETOS INTEGRADORES</Label>
        <span className="project-count">{projectCount} SEMESTRES <b>·</b> {projectCount} PROJETOS</span>
      </div>
      <div className="project-list">
        {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
      </div>

      <div className="technical-course">
        <span className="technical-marker">ETEC</span>
        <p><Label>FORMAÇÃO TÉCNICA · 2022 — 2023</Label><br /><strong>Técnico em Desenvolvimento de Sistemas</strong><br />Etec Prof.ª Ilza Nascimento Pintus · São José dos Campos</p>
      </div>
    </section>
  )
}
