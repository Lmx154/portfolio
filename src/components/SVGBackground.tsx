import { useState, useEffect } from 'react';
import '../index.css'; // must include .fade-in / .fade-out styles

// Number of diamonds across and down in our 800×800 tile
const COLS = 16; 
const ROWS = 16;
// Each “cell” is 50×50 if we want 16 columns (16×50 = 800)
const CELL_SIZE = 800 / COLS;

export default function SVGBackground() {
  // currentPattern is either 0 or 1 (so we can fade between them)
  const [currentPattern, setCurrentPattern] = useState<0 | 1>(0);
  // patternDefs is an array of 2 patterns that we dynamically regenerate
  const [patternDefs, setPatternDefs] = useState<JSX.Element[]>([
    createRandomPattern('pattern0'), 
    createRandomPattern('pattern1')
  ]);

  // Every 4 seconds, flip between pattern0 and pattern1
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Switch 0 -> 1 or 1 -> 0
      setCurrentPattern((prev) => (prev === 0 ? 1 : 0));

      // Generate a new pattern for the *other* index
      setPatternDefs((prevDefs) => {
        // nextIndex is the one that’s *not* currently visible
        const nextIndex = currentPattern === 0 ? 0 : 1;
        // Create a fresh pattern for that index
        const newDefs = [...prevDefs];
        // We must give each pattern a unique ID each time we recreate it
        // so it doesn’t conflict in <defs>.
        newDefs[nextIndex] = createRandomPattern(`pattern${nextIndex}`);
        return newDefs;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentPattern]);

  return (
    <svg
      className="svg-background"
      // The viewBox can be something like 0 0 800 600,
      // but let's make it 0 0 800 800 so it matches the tile height
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        We define two <pattern> elements in <defs>.
        patternDefs[0] and patternDefs[1] are “slots” 
        that we dynamically regenerate. 
      */}
      <defs>
        {patternDefs[0]}
        {patternDefs[1]}
      </defs>

      {/* 
        Two <rect> layers for the background, each referencing 
        either pattern0 or pattern1. We fade in/out via CSS. 
      */}
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
 * Creates a <pattern> (width=800, height=800) that draws 
 * a grid of diamonds. Each diamond might be filled or hollow 
 * (stroke‐only) at random.
 * 
 * @param patternId The unique string ID for this pattern in <defs>
 */
function createRandomPattern(patternId: string): JSX.Element {
  // We'll build an array of <path> or <polygon> elements representing each diamond.
  // Each diamond goes in a cell of size 50×50 (if COLS=16, ROWS=16).
  const diamonds: JSX.Element[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // Calculate the center of this cell in the 800×800 tile
      const centerX = col * CELL_SIZE + CELL_SIZE / 2;
      const centerY = row * CELL_SIZE + CELL_SIZE / 2;

      // Decide randomly if diamond is filled or hollow
      const isFilled = Math.random() < 0.5; 
      // Random color for variety (could also randomize stroke vs fill)
      const hue = Math.floor(Math.random() * 360);
      const color = `hsla(${hue}, 60%, 50%, 1)`; 

      // We'll define a diamond shape with corners around center
      // Diamond corners: top (cx, cy - r), right (cx + r, cy), bottom (cx, cy + r), left (cx - r, cy)
      // Let's pick a radius ~ half of cell
      const r = CELL_SIZE / 2.8; 
      const diamondPath = `
        M ${centerX} ${centerY - r}
        L ${centerX + r} ${centerY}
        L ${centerX} ${centerY + r}
        L ${centerX - r} ${centerY}
        Z
      `;

      // If it's filled, we do fill=color, stroke=none, else stroke=color, fill=none
      diamonds.push(
        <path
          key={`r${row}c${col}`}
          d={diamondPath}
          fill={isFilled ? color : 'none'}
          stroke={isFilled ? 'none' : color}
          strokeWidth={1}
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
      width="800"
      height="800"
      patternUnits="userSpaceOnUse"
    >
      {/* 
        We wrap all diamonds in a <g>. 
        Optionally you could put a background rectangle if you want 
        something behind the diamonds. 
      */}
      <g>
        {diamonds}
      </g>
    </pattern>
  );
}
