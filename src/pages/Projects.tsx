import ProjectTile from '../components/ProjectTile';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[800px] w-full mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectTile
            title="Rocket Game"
            description="Brief description of the project."
            link="https://rocketcs.web.app/"
            labels={['Flutter', 'Dart', 'C#', 'ASP.NET', 'SQL', 'Postgres']}
            image="/rocketGame.png"
          />
          <ProjectTile
            title="TATM"
            description="Reverse engineered testing module for UTRGV rocket club's telemetry software"
            link="#"
            labels={['Python', 'Embedded']}
            image="/tastm.jpg"
          />
          <ProjectTile
            title="TDAS-GUI"
            description="Description of the TDAS-GUI project."
            link="#"
            labels={['Rust', 'Tauri', 'JavaScript', 'React']}
            image="das-gui.png"
          />
          <ProjectTile
            title="Portfolio Site"
            description="This portfolio site showcasing my projects."
            link="#"
            labels={['TypeScript', 'React', 'Tailwind', "Node.js"]}
            image="portfolio.png"
          />
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  )
}

export default Projects
