import { Typewriter } from 'react-simple-typewriter'
import '../index.css'; // Import the global CSS file

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
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
      <div className="arrow-container">
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path className="arrow-shaft" d="M12 0v24" stroke="white" strokeWidth="2" fill="none"/>
          <path className="arrow-head" d="M4 16l8 8l8-8" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default Home;
