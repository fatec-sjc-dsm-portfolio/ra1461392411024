import { careers } from '../../data/careers'
import { Label } from '../primitives/Label'
import { CareerItem } from './CareerItem'
import { SiteFooter } from './SiteFooter'
import { SkillsPanel } from './SkillsPanel'

export function ProfessionalSection() {
  return (
    <section className="professional-section section-shell" id="profissional" aria-labelledby="professional-title">
      <div className="section-heading professional-heading">
        <div>
          <Label variant="index">03 / PROFISSIONAL</Label>
          <h2 id="professional-title">Do conhecimento<br />à <em>entrega.</em></h2>
        </div>
        <p>Atuação em produtos SaaS e plataformas operacionais, do planejamento técnico à construção de APIs, interfaces e integrações.</p>
      </div>

      <div className="career-layout">
        <div className="career-list">{careers.map((career) => <CareerItem career={career} key={career.company} />)}</div>
        <SkillsPanel />
      </div>

      <SiteFooter />
    </section>
  )
}
