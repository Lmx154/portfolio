import { useState } from "react";
import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => setModalImage(imageUrl);
  const closeModal = () => setModalImage(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col">
      <h1 className="text-6xl text-center mt-8 mb-20">Projects</h1>
      <div className="flex-1 flex items-start justify-center mb-20">
        <div className="max-w-[1600px] w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            <ProjectTile
              title="Rocket Game"
              description={`

A 2D arcade-style rocket game showcasing cross-platform development with Flutter and Dart, featuring a custom ASP.NET Core (C#) backend.

## Key Technical Achievements

* Implemented a custom API for score submission and data management
* Deployed backend on Azure with PostgreSQL on Neon.tech
* Utilized GitHub Actions for CI/CD, ensuring automated deployment
* Hosted Flutter frontend on Firebase for seamless cross-platform accessibility

## Impact & Skills Demonstrated

* Demonstrated proficiency in Dart for interactive, responsive frontends
* Strengthened full-stack skills integrating ASP.NET, PostgreSQL, and cloud hosting
* Learned end-to-end deployment pipelines leveraging GitHub Actions
`}
              deploymentUrl="https://rocketcs.web.app/"
              github="https://github.com/Lmx154/dart_demo"
              labels={["Flutter", "Dart", "C#", "ASP.NET", "SQL", "Postgres"]}
              image="/rocketGame.png"
              onImageClick={openModal}
              completion={100}
            />

            <ProjectTile
              title="TASTM"
              description={`

Developed a testing module to simulate rocket launch telemetry, enhancing stability and reliability for the UTRGV Rocket Launchers team.

## Key Technical Achievements

* Created a Python-based simulation using CircuitPython on Raspberry Pi Pico
* Emulated real rocket-to-ground station communication for rigorous testing
* Implemented robust testing strategies for improved software quality

## Impact & Skills Demonstrated

* Showcased ability to design and deploy embedded systems
* Enhanced telemetry capabilities through systematic testing
* Demonstrated adaptability in applying engineering principles to complex real-time data systems
`}
              github="https://github.com/Lmx154/TASTM"
              labels={["Python", "Embedded"]}
              image="/tastm.jpg"
              onImageClick={openModal}
              completion={100}
            />

            <ProjectTile
              title="TDAS-GUI"
              description={`

Modernized the UTRGV Rocket Launchers telemetry visualization system, resolving deprecated dependencies and frequent bugs.

## Key Technical Achievements

* Built with Tauri 2.0, utilizing Rust for backend performance and React for frontend
* Integrated high-frequency data handling (up to 100Hz) with asynchronous Rust libraries
* Implemented real-time display of acceleration, altitude, GPS, and data recording

## Impact & Skills Demonstrated

* Delivered a robust platform for real-time telemetry analysis
* Demonstrated proficiency with Vite, Tailwind CSS, and Rust’s async ecosystems
* Showcased strong problem-solving skills by addressing complex data handling challenges
`}
              github="https://github.com/Lmx154/TDAS-GUI"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="das-gui.png"
              onImageClick={openModal}
              completion={100}
            />

            <ProjectTile
              title="Portfolio Site"
              description={`

A refresh of my personal portfolio website, emphasizing scalable architecture and modern web development practices.

## Key Technical Achievements

* Built with TypeScript and React for a robust, maintainable codebase
* Styled with Tailwind CSS for efficient, responsive design
* Hosted on Render for reliable and scalable performance
* Integrated dynamic SVG background, Google reCAPTCHA, and EmailJS for enhanced UX

## Impact & Skills Demonstrated

* Showcased strong front-end development skills with TypeScript
* Gained real-world experience in secure form handling and service integration
* Demonstrated ability to create visually appealing and interactive web experiences
`}
              deploymentUrl="https://luisamartinez.xyz/"
              github="https://github.com/Lmx154/portfolio"
              labels={["TypeScript", "React", "Tailwind", "Node.js"]}
              image="portfolio.png"
              onImageClick={openModal}
              completion={80}
            />

            <ProjectTile
              title="Portfolio Site v1"
              description={`

My original portfolio site built primarily in HTML/CSS, marking my initial steps into web development.

## Key Technical Achievements

* Employed basic JavaScript for interactive elements
* Learned fundamental web dev practices in styling and layout
* Transitioned to React for code maintainability and scalability

## Impact & Skills Demonstrated

* Established a foundation in front-end web development
* Demonstrated self-motivation to learn and expand technical skill sets
`}
              github="https://github.com/Lmx154/mywebsite"
              labels={["JavaScript", "React", "Node.js"]}
              image="portfolioog.png"
              onImageClick={openModal}
              completion={100}
            />

            <ProjectTile
              title="Semester Project"
              description={`

A gradebook application developed for my Software Engineering class, utilizing Ruby on Rails, PostgreSQL, and comprehensive testing.

## Key Technical Achievements

* Deployed to Render with a PostgreSQL database on Neon.tech
* Implemented RSpec for backend testing and Cucumber for frontend/UI testing
* Managed SCRUM-based workflows via Jira, achieving a perfect score

## Impact & Skills Demonstrated

* Proven leadership as SCRUM Master, coordinating tasks and ensuring on-time delivery
* Showcased proficiency in Rails, database integration, and automated testing
* Demonstrated ability to build reliable, role-based web applications
`}
              deploymentUrl="https://fp-gradebook-f24-team-f24-401.onrender.com"
              github="https://github.com/Lmx154/gradebook"
              labels={["Ruby", "Ruby on Rails", "SQL", "Postgres"]}
              image="semesterproject.png"
              onImageClick={openModal}
              completion={100}
            />

            <ProjectTile
              title="SENTINEL"
              description={`

Next-generation rocket telemetry system for UTRGV Rocket Launchers, building on the TDAS-GUI prototype.

## Key Technical Achievements

* Implemented real-time 3D rocket orientation tracking and flight trajectory visualization
* Employed an event-driven architecture for seamless communication between hardware and software
* Leveraged Rust, Tauri, and React for performant, cross-platform data analysis

## Impact & Skills Demonstrated

* Enhanced rocket launches with comprehensive flight monitoring and sensor data analysis
* Demonstrated ability to collaborate on complex, production-ready systems
* Applied lessons from previous projects to improve reliability and performance
`}
              github="https://github.com/andrewalvrz/SENTINEL"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="sentinel.png"
              onImageClick={openModal}
              completion={60}
            />            <ProjectTile
              title="AI Assistant"
              description={`

Experimental project exploring the capabilities of the OpenAI API through a simple chatbot interface.

## Key Technical Achievements

* Built a functional chatbot UI with Next.js and TypeScript
* Implemented API integration with OpenAI's language models
* Experimented with prompt engineering techniques
* Created a basic frontend-backend communication flow

## Impact & Skills Demonstrated

* Gained practical experience with AI API integration
* Explored the potential and limitations of large language models
* Enhanced understanding of modern web development patterns
* Developed foundation for future AI-powered projects
`}
              labels={[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "OpenAI API",
                "React",
                "Python",
                "FastAPI",
              ]}
              image="ai-assistant.png"
              onImageClick={openModal}
              completion={100}
            />            <ProjectTile
              title="Chatbot Demo"
              description={`

Exploration into AI-powered documentation assistance, featuring a specialized chatbot for codebase navigation.

## Key Technical Achievements

* Ingested source code and documentation with a text processing pipeline
* Utilized FAISS for efficient vector similarity search
* Integrated Hugging Face API for contextual response generation with advanced prompt engineering

## Impact & Skills Demonstrated

* Showcased expertise in AI technologies and developer tool creation
* Overcame context window constraints and API rate limits
* Demonstrated effective use of embedding models and vector databases for technical documentation
`}
              github="https://github.com/Lmx154/chatbot"
              labels={["Python"]}
              image="chatbot.png"
              onImageClick={openModal}
              completion={100}
            />            <ProjectTile
              title="B.R.U.N.O"
              description={`

Developed a comprehensive multi-board flight computer system and ground station for advanced rocketry telemetry applications.

## Key Technical Achievements

* Implemented a dual-board architecture with NAVC for sensor data collection and FC for telemetry transmission
* Integrated multiple sensors including IMU, barometer, magnetometer, GPS, and RTC for comprehensive flight data
* Engineered real-time communication protocols between flight computer and ground station using LoRa radio
* Developed automatic parachute deployment system based on altimeter readings

## Impact & Skills Demonstrated

* Applied embedded systems programming in a mission-critical aerospace context
* Designed reliable telemetry systems for high-speed, high-altitude applications
* Leveraged hardware-software integration skills across multiple microcontrollers
* Created systems compatible with advanced visualization software for real-time monitoring
`}
              labels={["C++", "Embedded"]}
              image="/brunito.jpg"
              onImageClick={openModal}
              completion={60}
            />            <ProjectTile
              title="Applytron"
              description={`
Applytron is a browser extension that allows a user to autofill an online job application by extracting its forms/fields then using AI to fill them in with the user's resume information.

## Key Technical Achievements

* Developed a browser extension to automate the job application process
* Implemented form field detection and extraction algorithms
* Integrated AI capabilities to match resume data with appropriate application fields
* Created a user-friendly interface for managing resume information

## Impact & Skills Demonstrated

* Streamlined the job application process, saving users significant time
* Applied machine learning techniques to solve a common real-world problem
* Demonstrated expertise in browser extension development and web scraping
* Showcased ability to integrate AI services with front-end technologies
`}
              labels={["AI", "JavaScript"]}
              image="/applytron.png"
              onImageClick={openModal}
              completion={90}
            />

            <ProjectTile
              title="SARE Clinostat project"
              description={`

Led the development of a high-precision clinostat control system, integrating Rust, React, and ESP32-based hardware.

## Key Technical Achievements

* Architected a Tauri 2.0 desktop app for real-time motor control and data monitoring
* Implemented bidirectional communication via ESP-NOW for high-precision RPM management
* Streamlined device connectivity with automated serial port detection and error handling

## Impact & Skills Demonstrated

* Demonstrated full-stack expertise in hardware-software integration
* Showcased leadership by guiding protocol and framework decisions
* Delivered a robust, user-friendly solution for scientific research applications
`}
              github="https://github.com/Lmx154/clinostat"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="clinostat.png"
              onImageClick={openModal}
              completion={90}
            />
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={closeModal}
        >
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
