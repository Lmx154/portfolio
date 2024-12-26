import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import BackgroundCycle from './BackgroundCycle'

function App() {
  return (
    <>
      <BackgroundCycle />
      <nav className="fixed top-4 left-4 bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-md shadow-lg hover:bg-white/10 transition-all duration-300 z-50">
        <div className="w-6 h-6 flex flex-col justify-between items-center">
          <span className="block w-full h-0.5 bg-gray-300"></span>
          <span className="block w-full h-0.5 bg-gray-300"></span>
          <span className="block w-full h-0.5 bg-gray-300"></span>
        </div>
      </nav>
      <main className="relative z-10">
        <Home />
        <Projects />
      </main>
    </>
  )
}

export default App
