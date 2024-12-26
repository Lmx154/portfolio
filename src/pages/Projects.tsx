import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="max-w-[800px] w-full mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card Example */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project Title</h3>
            <p className="mb-4">Brief description of the project.</p>
            <a href="#" className="text-indigo-400 hover:underline">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  )
}

export default Projects
