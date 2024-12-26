import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects' // Import Projects component

function App() {

  return (
    <div className="flex flex-col">
      <Home />
      <Projects /> {/* Render Projects component */}
      {/* Add more sections here if needed */}
    </div>
  )

}

export default App
