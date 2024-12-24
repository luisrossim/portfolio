import { Experiencias } from "./components/experiencias"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Profile } from "./components/profile"
import { Projetos } from "./components/projetos"
import { Tecnologias } from "./components/tecnologias"

function App() {
  return (
    <>
      <Header/>
      <Profile/>
      <Projetos/>
      <Tecnologias/>
      <Experiencias/>
      <Footer/>
    </>
  )
}

export default App
