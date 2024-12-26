import { useEffect, useRef, useState } from 'react'

const backgrounds = [
  '/1.svg',
  '/2.svg',
  '/3.svg',
  '/4.svg',
  '/5.svg',
  '/6.svg',
  '/7.svg',
]

export default function BackgroundCycle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % backgrounds.length)
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])


  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="fade-bg"
          style={{
            backgroundImage: `url('${bg}'), linear-gradient(to bottom, #000, #000)`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
        />
      ))}
    </div>
  )
}