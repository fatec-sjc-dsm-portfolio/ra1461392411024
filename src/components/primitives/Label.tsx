import type { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
  variant?: 'index' | 'micro'
}

export function Label({ children, variant = 'micro' }: LabelProps) {
  const className = variant === 'index' ? 'section-index' : 'micro-label'

  return <span className={className}>{children}</span>
}
