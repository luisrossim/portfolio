import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Profile } from "./components/profile"
import { Projects } from "./components/projects"

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2 md:px-10">
        <Profile />
        <hr></hr>
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
