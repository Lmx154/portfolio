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
              description="Brief description of the project."
              link="https://rocketcs.web.app/"
              github="https://github.com/username/rocket-game" // Add GitHub link
              labels={['Flutter', 'Dart', 'C#', 'ASP.NET', 'SQL', 'Postgres']}
              image="/rocketGame.png"
              onImageClick={openModal}
            />
            <ProjectTile
              title="TATM"
              description="Reverse engineered testing module for UTRGV rocket club's telemetry software"
              link="#"
              github="https://github.com/username/tatm" // Add GitHub link
              labels={['Python', 'Embedded']}
              image="/tastm.jpg"
              onImageClick={openModal}
            />
            <ProjectTile
              title="TDAS-GUI"
              description="Description of the TDAS-GUI project."
              link="#"
              github="https://github.com/username/tdas-gui" // Add GitHub link
              labels={['Rust', 'Tauri', 'JavaScript', 'React']}
              image="das-gui.png"
              onImageClick={openModal}
            />
            <ProjectTile
              title="Portfolio Site"
              description="This portfolio site showcasing my projects."
              link="#"
              github="https://github.com/username/portfolio-site" // Add GitHub link
              labels={['TypeScript', 'React', 'Tailwind', "Node.js"]}
              image="portfolio.png"
              onImageClick={openModal}
            />
            <ProjectTile
              title="Semester Project"
              description="A gradebook application for teachers assistant and teachers. This web application was a final project for my software engineering class. To test functionality, you can use the following credentials: Email: ta@ta.com Password: default123"
              link="https://fp-gradebook-f24-team-f24-401.onrender.com"
              github="https://github.com/username/semester-project" // Add GitHub link
              labels={['Ruby', 'Ruby on Rails', 'SQL', 'Postgres']}
              image="semesterproject.png"
              onImageClick={openModal}
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
