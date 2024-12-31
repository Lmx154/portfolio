import { Typewriter } from 'react-simple-typewriter';
import '../index.css'; // Import the global CSS file

const Home = () => {
  return (
    <div id="home" className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        src="/profile.jpg"
        alt="Portrait"
        className="w-48 h-48 rounded-full object-cover drop-shadow-lg fading-mask mb-0.1"
      />
      <div className="relative h-[200px] w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold tracking-normal md:tracking-normal lg:tracking-normal gradient-text pb-4 leading-normal text-center mx-auto">
            <Typewriter
              words={[
                'Welcome to My Portfolio.', 
                'I\'m Luis, a passionate Software Developer.',
                'Let\'s Build Something Together.'
              ]}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000} // Increased delay between messages
            />
          </h1>
        </div>
      </div>
      <div className="arrow-container mt-auto mb-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          version="1.1" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          className="arrow"
        >
          <g 
            strokeWidth="9" 
            stroke="hsl(0, 0%, 100%)" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            transform="rotate(45, 400, 400)"
          >
            <line 
              x1="372.5" 
              y1="372.5" 
              x2="427.5" 
              y2="427.5" 
              markerEnd="url(#SvgjsMarker2406)"
            />
          </g>
          <defs>
            <marker 
              markerWidth="6.5" 
              markerHeight="6.5" 
              refX="3.25" 
              refY="3.25" 
              viewBox="0 0 6.5 6.5" 
              orient="auto" 
              id="SvgjsMarker2406"
            >
              <polygon 
                points="0,6.5 3.25,3.25 0,0 6.5,3.25" 
                fill="hsl(0, 0%, 100%)"
              />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Home;
