import { AcademicSection } from './components/sections/AcademicSection'
import { PersonalSection } from './components/sections/PersonalSection'
import { ProfessionalSection } from './components/sections/ProfessionalSection'
import { SiteHeader } from './components/sections/SiteHeader'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <PersonalSection />
        <AcademicSection />
        <ProfessionalSection />
      </main>
    </>
  )
}

export default App
