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
            labels={['React', 'TypeScript', 'Tailwind']}
            image="/rocketGame.png"
          />
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  )
}

export default Projects
