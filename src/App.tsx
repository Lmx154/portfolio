import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects' // Import Projects component
import { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    const backgrounds = [
      '/1.svg',
      '/2.svg',
      '/3.svg',
      '/4.svg',
      '/5.svg',
      '/6.svg',
      '/7.svg',
    ]
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % backgrounds.length
      document
        .getElementById('root')
        ?.style.setProperty('background-image', `url('${backgrounds[index]}'), linear-gradient(to bottom, #000000, #000000)`)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      <Home />
      <Projects /> {/* Render Projects component */}
      {/* Add more sections here if needed */}
    </div>
  )

}

export default App
