import type { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export function LinkButton({ href, children, variant }: LinkButtonProps) {
  return <a className={`button button-${variant}`} href={href}>{children}</a>
}
