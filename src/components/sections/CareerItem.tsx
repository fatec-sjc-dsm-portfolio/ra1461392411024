import { Fragment } from 'react'
import type { CareerEntry } from '../../data/careers'
import { Icon } from '../common/Icon'

interface CareerItemProps {
  career: CareerEntry
}

export function CareerItem({ career }: CareerItemProps) {
  return (
    <article className="career-item">
      <div className="career-date">
        {career.period.map((period, index) => (
          <Fragment key={period}>
            {index > 0 && <i>—</i>}
            <span>{period}</span>
          </Fragment>
        ))}
      </div>
      <div className="career-content">
        <div className="career-title-row">
          <div>
            <h3>{career.title}</h3>
            <p className="company">{career.company} <span>·</span> {career.context}</p>
          </div>
          <span className="career-arrow"><Icon name="arrow" size={18} /></span>
        </div>
        <p className="career-description">{career.description}</p>
        <div className="career-tags">{career.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </article>
  )
}
