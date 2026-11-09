import { Icon } from '../common/Icon'

export function SiteHeader() {
  return (
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
  )
}
