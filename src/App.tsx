import React, { useState } from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import BackgroundCycle from './BackgroundCycle'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuAnimation = useSpring({
    transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: menuOpen ? 1 : 0,
    config: { tension: 200, friction: 20 }
  });

  const items = [
    { href: '#home', label: 'Home', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-300', hover: 'hover:text-cyan-200' },
    { href: '#projects', label: 'Projects', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-300', hover: 'hover:text-yellow-200' },
    { href: '#contact', label: 'Contact', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-300', hover: 'hover:text-blue-200' }
  ];

  const trail = useTrail(items.length, {
    transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: menuOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
    delay: menuOpen ? 200 : 0
  });

  return (
    <>
      <BackgroundCycle />
      <nav className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-md shadow-lg hover:bg-white/10 transition-all duration-300"
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center">
            <span className="block w-full h-0.5 bg-gray-300"></span>
            <span className="block w-full h-0.5 bg-gray-300"></span>
            <span className="block w-full h-0.5 bg-gray-300"></span>
          </div>
        </button>
        {menuOpen && (
          <div className="mt-2 p-4">
            <ul className="space-y-2">
              {trail.map((style, index) => (
                <animated.li key={index} style={style}>
                  <a href={items[index].href} className={`block ${items[index].bg} backdrop-blur-sm border ${items[index].border} p-2 rounded-full shadow-lg ${items[index].text} ${items[index].hover} transition-all duration-300`}>
                    {items[index].label}
                  </a>
                </animated.li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <main className="relative z-10">
        <Home />
        <Projects />
      </main>
    </>
  )
}

export default App
