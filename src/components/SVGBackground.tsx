// SVGBackground.tsx
import { useState, useEffect } from 'react';
import '../index.css'; // Must include your .fade-in, .fade-out, etc.

const COLS = 30;         // How many columns of diamonds in the 800×800 tile
const ROWS = 30;         // How many rows of diamonds
const TILE_SIZE = 800;   // Our pattern tile is 800×800
const CELL_SIZE = TILE_SIZE / COLS; // Each cell’s width/height
const DIAMOND_SIZE = CELL_SIZE / 15; // Diamond corner offset from center

export default function SVGBackground() {
  // Only toggling between pattern0 and pattern1
  const [currentPattern, setCurrentPattern] = useState<0 | 1>(0);

  // Store two random pattern definitions so we can fade between them
  const [patternDefs, setPatternDefs] = useState<JSX.Element[]>([
    createRandomPattern('pattern0'),
    createRandomPattern('pattern1')
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Flip which pattern is visible
      setCurrentPattern((prev) => (prev === 0 ? 1 : 0));

      // Regenerate the pattern that was just hidden
      setPatternDefs((prevDefs) => {
        const newDefs = [...prevDefs];
        // If currentPattern was 0, we just switched to 1, so we regenerate pattern0
        // If currentPattern was 1, we just switched to 0, so we regenerate pattern1
        const nextIndex = currentPattern === 0 ? 0 : 1;
        newDefs[nextIndex] = createRandomPattern(`pattern${nextIndex}`);
        return newDefs;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentPattern]);

  return (
    <svg
      className="svg-background"
      // Make the SVG’s coordinate system 800×800
      viewBox="0 0 800 800"
      // This attribute ensures the viewBox always covers the full screen 
      // with no black bars, though some parts may be cropped if the screen
      // is much wider or taller than 1:1 ratio.
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {patternDefs[0]}
        {patternDefs[1]}
      </defs>

      {/* Two stacked rects, each referencing one of the patterns */}
      <rect
        className={`pattern-rect ${currentPattern === 0 ? 'fade-in' : 'fade-out'}`}
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern0)"
      />
      <rect
        className={`pattern-rect ${currentPattern === 1 ? 'fade-in' : 'fade-out'}`}
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern1)"
      />
    </svg>
  );
}

/**
 * Creates a single <pattern> definition with an 800×800 tile. 
 * The tile is subdivided into COLS × ROWS cells, each containing a diamond 
 * that may be filled or hollow. All diamonds are gray and smaller/farther apart.
 */
function createRandomPattern(patternId: string): JSX.Element {
  const diamonds: JSX.Element[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // Center of this cell:
      const cx = col * CELL_SIZE + CELL_SIZE / 2;
      const cy = row * CELL_SIZE + CELL_SIZE / 2;

      // Randomly decide if diamond is filled or hollow
      const isFilled = Math.random() < 0.5;

      // All diamonds: same gray color
      const color = 'gray';

      // Path for a diamond: top, right, bottom, left corners
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
