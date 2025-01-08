import { useState } from 'react';
import ProjectTile from '../components/ProjectTile';

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col">
      <h1 className="text-6xl text-center mt-8 mb-12">Projects</h1>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectTile
              title="Rocket Game"
              description="A game made with Flutter and Dart. This game is a simple rocket game where the player must avoid asteroids and collect stars to gain points. I made this game as a presentation for my Organization of Programming Languages class. I also made a backend for this game using C# and ASP.NET Core. The backend is hosted on Azure and uses a Postgres database. Here is a link to the backend: https://github.com/Lmx154/dart_demo_backend"
              deploymentUrl="https://rocketcs.web.app/"
              github="https://github.com/Lmx154/dart_demo" // Add GitHub link
              labels={['Flutter', 'Dart', 'C#', 'ASP.NET', 'SQL', 'Postgres']}
              image="/rocketGame.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="TASTM"
              description="This project was made as a gateway to understand the challenges associated with gathering realtime telemetry. This was brought about by my joining of the UTRGV Rocket Launchers. When I joined, there was no way to test whether or not my changes would break the Telemetry software, so using my knowledge gained from my Software Engineering course, I created a testing module that simulated a rocket launch. I used this to test my new features and add to the existing software. I also used this testing module to create a whole new telemetry gathering software named TDAS that utilized newer tools. I used CircuitPython to create a simple rocket to ground station simulation. "
              github="https://github.com/Lmx154/TASTM" // Add GitHub link
              labels={['Python', 'Embedded']}
              image="/tastm.jpg"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="TDAS-GUI"
              description="This project was made to address the limitations of the existing TAS-GUI used for telemetry visualization in the UTRGV Rocket Launchers. The existing TAS-GUI was using older tools and was riddled with bugs that came about from deprecated dependencies. This made it a challenge to add new features. I used this as an opportunity to learn new tools and create a new telemetry visualization software that was more stable and easier to use, and created a more efficient and user friendly way of storing telemetry data. I used Tauri 2.0 for its similarity to the existing TAS-GUI, and because of my familiarity with full-stack development. Using Tauri also allowed me to leverage the customizibility of JavaScript and React, coupled with the performance of Rust at the backend. I created all performance and latency sensitive features in Rust, and used JavaScript and React only for UI and data visualization. In Rust I created functions to open, close and list serial ports. I also made sure to include data parsing and file creation into the backend to minimize overhead that was present in the original TAS-GUI. "
              github="https://github.com/username/tdas-gui" // Add GitHub link
              labels={['Rust', 'Tauri', 'JavaScript', 'React']}
              image="das-gui.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="Portfolio Site"
              description="This is my current portfolio site. I learned a lot since the making of my first website, so I decided to refresh my website to reflect it. I made this site to showcase my projects and skills. I chose to use TypeScript/React despite my familiarity with JavaScript, for the purpose of learning something new. After being introduced to Tailwind CSS by my collegues, I found that the amount of time saved during development was significant and therfore, decided to implement it here. This site is hosted on Render."
              github="https://github.com/username/portfolio-site" // Add GitHub link
              labels={['TypeScript', 'React', 'Tailwind', "Node.js"]}
              image="portfolio.png"
              onImageClick={openModal}
              completion={80} // Add completion percentage
            />
            <ProjectTile
              title="Portfolio Site v1"
              description="My original portfolio site made during Fall 2024 semester. I made this site mostly in HTML/CSS since I wasn't yet familiar with JavaScript. I used this site to learn the basics of web development."
              github="https://github.com/username/portfolio-site" // Add GitHub link
              labels={['JavaScript', 'React', "Node.js"]}
              image="portfolioog.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="Semester Project"
              description="A gradebook application for teachers assistant and teachers. This web application was a final project for my software engineering class. To test functionality, you can use the following credentials: Email: ta@ta.com Password: default123"
              deploymentUrl="https://fp-gradebook-f24-team-f24-401.onrender.com"
              github="https://github.com/username/semester-project" // Add GitHub link
              labels={['Ruby', 'Ruby on Rails', 'SQL', 'Postgres']}
              image="semesterproject.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]" onClick={closeModal}>
          <div className="relative w-screen h-screen flex items-center justify-center p-4">
            <img 
              src={modalImage} 
              alt="Full size preview"
              className="max-w-[95vw] max-h-[95vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
