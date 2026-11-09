import type { Project } from '../../data/projects'
import { Icon } from '../common/Icon'
import { Label } from '../primitives/Label'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <details className={`project-card ${project.className}`}>
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
          <div><Label>O DESAFIO</Label><p>{project.challenge}</p></div>
          <div><Label>A SOLUÇÃO</Label><p>{project.solution}</p></div>
          <div className="detail-contribution"><Label>MINHA CONTRIBUIÇÃO</Label><p>{project.contribution}</p></div>
          <div className="detail-soft-skills"><Label>SOFT SKILLS</Label><p>{project.softSkills}</p></div>
        </div>
        <div className="detail-side">
          <Label>HARD SKILLS · TECNOLOGIAS</Label>
          <div className="tag-list">{project.stack.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
          <a className="repo-link" href={project.url} target="_blank" rel="noreferrer">Ver repositório <Icon name="external" size={15} /></a>
        </div>
      </div>
    </details>
  )
}
