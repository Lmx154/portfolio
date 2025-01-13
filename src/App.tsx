// App.tsx

import { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import './index.css';

import SVGBackground from './components/SVGBackground';
// Direct imports instead of lazy loading
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact'];
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentSection(section);
            }
          });
        },
        { threshold: 0.2,
          rootMargin: '0px 0px -20% 0px'
         }
      );

      const element = document.querySelector(`#${section}`);
      if (element) observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleTouch = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleWheel = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    {
      href: '#home',
      label: 'Home',
      bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      text: 'text-red-300',
      hover: 'hover:text-red-200',
    },
    {
      href: '#projects',
      label: 'Projects',
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-300',
      hover: 'hover:text-yellow-200',
    },
    {
      href: '#about',
      label: 'About',
      bg: 'bg-green-500/20',
      border: 'border-green-500/30',
      text: 'text-green-300',
      hover: 'hover:text-green-200',
    },
    {
      href: '#contact',
      label: 'Contact',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-300',
      hover: 'hover:text-blue-200',
    },
  ];

  const trail = useTrail(items.length, {
    transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: menuOpen ? 1 : 0,
    config: { duration: 100, tension: 200, friction: 20 },
    delay: menuOpen ? 100 : 0,
  });

  const getCurrentColors = () => {
    const colorMap = {
      home: 'bg-red-500/20 border-red-500/30',
      projects: 'bg-yellow-500/20 border-yellow-500/30',
      about: 'bg-green-500/20 border-green-500/30',
      contact: 'bg-blue-500/20 border-blue-500/30'
    };
    return colorMap[currentSection as keyof typeof colorMap] || colorMap.home;
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 w-full h-full">
        <SVGBackground />
      </div>

      <nav className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className={`backdrop-blur-md border p-2 rounded-md shadow-lg hover:bg-white/30 transition-all duration-300 ${getCurrentColors()}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className="mt-2 p-4">
          <ul className="space-y-2">
            {trail.map((style, index) => (
              <animated.li key={index} style={style}>
                <a
                  href={items[index].href}
                  onClick={(e) => handleClick(e, items[index].href)}
                  className={`
                    block
                    ${items[index].bg}
                    backdrop-blur-sm
                    border
                    ${items[index].border}
                    p-2
                    rounded-md 
                    shadow-lg
                    ${items[index].text}
                    ${items[index].hover}
                    transition-all
                    duration-300
                    text-center
                  `}
                >
                  {items[index].label}
                </a>
              </animated.li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="relative z-10">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
