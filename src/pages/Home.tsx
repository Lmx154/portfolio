import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src="src\assets\profile.jpg"
        alt="Portrait"
        className="w-48 h-48 rounded-full object-cover drop-shadow-lg fading-mask"
      />
      <h1 className="text-6xl font-bold mb-4">
        <Typewriter
          words={['Welcome to My Portfolio.']}
          loop={1} // Set loop to 1 to run once
          cursor
          cursorStyle='█' // Use a block character for the cursor
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default Home;
