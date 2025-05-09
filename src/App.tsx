import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Trajetoria } from "./components/Trajetoria"
import { Projetos } from "./components/Projetos"
import { Tecnologias } from "./components/Tecnologias"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projetos />
      <Tecnologias />
      <Trajetoria />
      <Footer />
    </>
  )
}

export default App
