import { skillGroups } from '../../data/skills'
import { Label } from '../primitives/Label'

export function SkillsPanel() {
  return (
    <aside className="skills-panel">
      <div className="skills-panel-top"><Label>HABILIDADES DO CURRÍCULO</Label><span className="skills-mark">2026</span></div>
      <h3>Tecnologias que<br /><em>colocam ideias de pé.</em></h3>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <Label>{group.name}</Label>
            <div className="skills-list">{group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="certificate-note">
        <Label>FORMAÇÃO COMPLEMENTAR · AGO/2026</Label>
        <strong>AWS Cloud Practitioner Essentials (Português)</strong>
        <span>AWS Training &amp; Certification</span>
      </div>
    </aside>
  )
}
