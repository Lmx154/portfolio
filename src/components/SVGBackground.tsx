import { useState, useEffect } from 'react';
import '../index.css';

const COLS = 25;
const ROWS = 25;
const TILE_SIZE = 800;
const CELL_SIZE = TILE_SIZE / COLS;
const DIAMOND_SIZE = CELL_SIZE / 15;

export default function SVGBackground() {
  const [patterns, setPatterns] = useState({
    current: createRandomPattern('pattern1'),
    next: createRandomPattern('pattern2'),
  });
  const [activePattern, setActivePattern] = useState('current'); // Toggle active pattern for transition
  const [isTransitioning, setIsTransitioning] = useState(false);

  const randomizePattern = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActivePattern(activePattern === 'current' ? 'next' : 'current'); // Toggle active pattern
      setPatterns(prev => ({
        ...prev,
        [activePattern === 'current' ? 'next' : 'current']: createRandomPattern(`pattern${Math.random()}`),
      }));

      setIsTransitioning(false);
    }, 2000); // Match transition duration
  };

  useEffect(() => {
    const intervalId = setInterval(randomizePattern, 5000); // Update pattern every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [activePattern]);

  return (
    <svg
      className="svg-background"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {patterns.current}
        {patterns.next}
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${patterns.current.props.id})`}
        className={`pattern-rect ${
          activePattern === 'current' ? 'fade-in' : 'fade-out'
        }`}
      />
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${patterns.next.props.id})`}
        className={`pattern-rect ${
          activePattern === 'next' ? 'fade-in' : 'fade-out'
        }`}
      />
    </svg>
  );
}

function createRandomPattern(patternId: string): JSX.Element {
  const diamonds: JSX.Element[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = col * CELL_SIZE + CELL_SIZE / 2;
      const cy = row * CELL_SIZE + CELL_SIZE / 2;
      const isFilled = Math.random() < 0.5;
      const color = 'gray';

      const diamondPath = `
        M ${cx} ${cy - DIAMOND_SIZE}
        L ${cx + DIAMOND_SIZE} ${cy}
        L ${cx} ${cy + DIAMOND_SIZE}
        L ${cx - DIAMOND_SIZE} ${cy}
        Z
      `;

      diamonds.push(
        <path
          key={`r${row}c${col}`}
          d={diamondPath}
          fill={isFilled ? color : 'none'}
          stroke={isFilled ? 'none' : color}
          strokeWidth={0.4}
        />
      );
    }
  }

  return (
    <pattern
      key={patternId}
      id={patternId}
      x="0"
      y="0"
      width={TILE_SIZE}
      height={TILE_SIZE}
      patternUnits="userSpaceOnUse"
    >
      <g>{diamonds}</g>
    </pattern>
  );
}
