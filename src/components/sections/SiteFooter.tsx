import { Icon } from '../common/Icon'

export function SiteFooter() {
  return (
    <>
      <div className="closing-note">
        <span className="closing-mark">GO<span>.</span></span>
        <p>Obrigado por chegar até aqui.<br /><em>Vamos construir algo?</em></p>
        <a href="mailto:gabrielsoliveira1606@gmail.com" aria-label="Enviar um e-mail para Gabriel Oliveira"><Icon name="mail" /><span>Escreva para mim</span><Icon name="arrow" /></a>
      </div>
      <footer className="site-footer">
        <span>© 2026 Gabriel Oliveira</span>
        <span>Feito com intenção <b>·</b> São José dos Campos, SP</span>
        <a href="#pessoal">Voltar ao início ↑</a>
      </footer>
    </>
  )
}
