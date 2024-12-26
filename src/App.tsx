import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import BackgroundCycle from './BackgroundCycle'

function App() {
  return (
    <>
      <BackgroundCycle />
      <main className="relative z-10">
        <Home />
        <Projects />
      </main>
    </>
  )
}

export default App
