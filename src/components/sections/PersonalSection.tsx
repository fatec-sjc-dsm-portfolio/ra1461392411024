import { Icon } from '../common/Icon'
import { Label } from '../primitives/Label'
import { LinkButton } from '../primitives/LinkButton'

export function PersonalSection() {
  return (
    <section className="personal-section section-shell" id="pessoal" aria-labelledby="personal-title">
      <div className="hero-topline">
        <span className="eyebrow"><span className="eyebrow-dot" /> Portfólio · 2026</span>
        <span className="location-label">São José dos Campos <span aria-hidden="true">/</span> SP</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">DESENVOLVIMENTO DE SOFTWARE · DSM</p>
          <h1 id="personal-title">Gabriel<br /><span>Oliveira</span><i>.</i></h1>
          <p className="hero-lede">Desenvolvedor full stack em formação. Construo aplicações que conectam <em>ideias, pessoas e soluções reais.</em></p>
          <div className="hero-actions">
            <LinkButton href="#academica" variant="primary">Conheça minha trajetória <Icon name="arrow" /></LinkButton>
            <LinkButton href="mailto:gabrielsoliveira1606@gmail.com" variant="secondary"><Icon name="mail" /> Entre em contato</LinkButton>
          </div>
        </div>
        <div className="hero-art" aria-label="Resumo da trajetória">
          <div className="art-grid" aria-hidden="true" />
          <div className="art-orbit orbit-one" aria-hidden="true" />
          <div className="art-orbit orbit-two" aria-hidden="true" />
          <div className="art-core">
            <img className="profile-portrait" src={`${import.meta.env.BASE_URL}perfil.png`} alt="Gabriel Oliveira" />
          </div>
          <div className="orbit-label label-top">CÓDIGO COM PROPÓSITO</div>
          <div className="orbit-label label-bottom">FATEC · DSM</div>
          <div className="art-coordinate">23°10′ S<br />45°53′ O</div>
        </div>
      </div>

      <div className="personal-lower">
        <article className="intro-card">
          <Label variant="index">01 / PESSOAL</Label>
          <div>
            <h2>Curiosidade que<br />vira <em>construção.</em></h2>
            <p>Sou estudante de Desenvolvimento de Software Multiplataforma na Fatec São José dos Campos e desenvolvedor full stack. Gosto de explorar tecnologias, entender problemas e criar aplicações que tenham utilidade no mundo real.</p>
          </div>
        </article>
        <aside className="outside-card">
          <Label>FORA DO CÓDIGO</Label>
          <h3>Outros interesses,<br />novas perspectivas.</h3>
          <div className="interest-list" aria-label="Interesses pessoais">
            <span>Basquete</span><span>Música</span><span>Jogos de cartas</span><span>Séries &amp; animes</span><span>Jogos de estratégia</span>
          </div>
          <div className="sparkle"><Icon name="spark" size={22} /></div>
        </aside>
      </div>

      <div className="contact-strip">
        <div><Label>CONTATO</Label><p>Aberto a conversas, ideias e oportunidades.</p></div>
        <div className="social-links">
          <a href="mailto:gabrielsoliveira1606@gmail.com" aria-label="Enviar e-mail"><Icon name="mail" /> <span>E-mail</span></a>
          <a href="https://github.com/Tico1606" target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Oliveira"><Icon name="github" /> <span>GitHub</span><Icon name="external" size={13} /></a>
          <a href="https://www.linkedin.com/in/gabriel-oliveira-884ba5282/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Oliveira"><Icon name="linkedin" /> <span>LinkedIn</span><Icon name="external" size={13} /></a>
        </div>
      </div>
    </section>
  )
}
