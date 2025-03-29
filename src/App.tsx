import { Header } from "./components/Header"
import { Navbar } from "./components/Nav"
import { Formacao } from "./components/Formacao"
import { Experiencia } from "./components/Experiencia"
import { Tech } from "./components/Tech"
import { Footer } from "./components/Footer"
import { Projeto } from "./components/Projeto"

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <div className="container max-w-[95rem] mx-auto pt-32 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-6">
          <Experiencia />
          <Formacao />
        </div>
      </div>

      <Projeto />
      <Tech />
      <Footer />
    </>
  )
}

export default App
