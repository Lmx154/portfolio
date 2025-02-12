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
              description="This project is a 2D arcade-style rocket game, developed using Flutter and Dart, designed to showcase Dart’s capabilities for cross-platform development. In the game, players navigate a rocket through space, avoiding asteroids and rescuing stranded astronauts to earn points. The game highlights Dart’s simplicity and efficiency in building interactive and responsive applications.

The backend for this project, developed using ASP.NET Core and C#, is hosted on Azure. It includes a custom API I created for score submission and the management of player score data. The API leverages a PostgreSQL database, hosted on Neon.tech, to store and retrieve player scores efficiently. I used Swagger to streamline the API development process, ensuring clear documentation and organized endpoints.

To enhance the development workflow, I implemented a Continuous Deployment (CD) pipeline using GitHub Actions. This setup automatically deploys the latest commit on the master branch to Azure, ensuring the backend is always up-to-date with the newest features and improvements.

The game's frontend, built with Flutter, is hosted on Firebase, demonstrating seamless integration across platforms. This hosting setup ensures fast and reliable deployment of the game while showcasing the interoperability of modern cloud services.

The project highlights the strengths of Dart for frontend development, C# for backend logic, and PostgreSQL for robust data storage, emphasizing the unique features of each technology. It was created as a presentation for my Organization of Programming Languages class to demonstrate the capabilities of these tools in building cohesive, full-stack solutions."
              deploymentUrl="https://rocketcs.web.app/"
              github="https://github.com/Lmx154/dart_demo" // Add GitHub link
              labels={["Flutter", "Dart", "C#", "ASP.NET", "SQL", "Postgres"]}
              image="/rocketGame.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="TASTM"
              description="This project was initiated as a stepping stone to understanding and addressing the complexities of real-time telemetry collection, inspired by my involvement with the UTRGV Rocket Launchers. Upon joining the team, I identified a significant challenge: the existing telemetry software lacked a robust testing framework, making it difficult to ensure that modifications would not introduce errors or break the system.

Leveraging the principles learned in my Software Engineering course, I developed a testing module designed to simulate a rocket launch environment. Using a Raspberry Pi Pico RP2040 microcontroller programmed with CircuitPython, I created a simulation that emulated the rocket-to-ground station communication process in a controlled environment. This module provided the ability to rigorously test new features and validate updates to the telemetry software, significantly improving its stability and reliability.

Building on this foundation, I developed a new telemetry data acquisition system (TDAS) using modern tools and practices. TDAS was designed to overcome the limitations of the previous system, offering improved functionality, stability, and compatibility with emerging technologies.

This project not only refined the team's telemetry capabilities but also provided me with hands-on experience in designing, testing, and deploying real-time data systems. It exemplifies my ability to identify challenges, apply engineering principles, and leverage modern technologies to deliver practical and impactful solutions."
              github="https://github.com/Lmx154/TASTM" // Add GitHub link
              labels={["Python", "Embedded"]}
              image="/tastm.jpg"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="TDAS-GUI"
              description="This project modernized the telemetry visualization system for the UTRGV Rocket Launchers team, addressing limitations of the outdated TAS-GUI, which was hindered by deprecated dependencies and frequent bugs. The new system, built using Tauri 2.0 and leveraging Rust for backend performance and React for the frontend, offers a streamlined and reliable platform for real-time telemetry analysis. Key improvements include seamless serial port communication, high-frequency data handling (up to 100Hz), real-time display of critical metrics like acceleration, altitude, and GPS data, and efficient data recording and parsing.

By incorporating technologies like Vite, Tailwind CSS, and asynchronous Rust libraries such as Tokio, the software ensures smooth data visualization and responsive updates. Customizable buffering options and automated file management further enhance usability. This reimagined system not only resolves the original software's challenges but also provides an extensible framework for future enhancements, reinforcing the team's ability to monitor and analyze telemetry data effectively."
              github="https://github.com/Lmx154/TDAS-GUI" // Add GitHub link
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]}
              image="das-gui.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="Portfolio Site"
              description="This project is a complete refresh of my portfolio website, designed to showcase my professional skills and projects while incorporating modern web development practices. Moving beyond my earlier work, this site reflects my growth as a developer and my commitment to learning new tools and technologies.

To enhance scalability and maintainability, I built the site using TypeScript and React, embracing the advantages of strongly typed programming. For styling, I utilized Tailwind CSS, which significantly streamlined the development process and allowed me to create a sleek, responsive design efficiently. The site is hosted on Render to ensure reliable performance and accessibility.

One of the standout features of the site is its dynamic SVG background, which displays a visually engaging grid of diamonds. These diamonds are randomly generated, featuring a mix of hollow and filled shapes, and periodically change to provide a modern, interactive aesthetic. To organize content effectively, I implemented a tile-based system for structuring projects, offering visitors a clean and intuitive way to explore my work.

The contact form is a critical feature of the site, designed for both functionality and security. I incorporated Google reCAPTCHA v2 to prevent spam and ensure the integrity of incoming messages. For email functionality, I opted to use EmailJS to handle email submissions directly from the contact form. This decision was driven by its simplicity and practicality—EmailJS’s free plan supports up to 200 emails per month, which is more than sufficient for a portfolio website. By leveraging EmailJS, I avoided the complexity of building a dedicated email API, while still delivering a seamless and reliable communication channel. To adhere to best practices, I implemented secure API key management using environment variables.

This portfolio site reflects my dedication to continuous improvement and showcases my ability to create modern, visually appealing, and functional web applications. It serves as a dynamic and professional representation of my technical expertise, creativity, and commitment to delivering high-quality work."
              deploymentUrl="https://luisamartinez.xyz/"
              github="https://github.com/Lmx154/portfolio" // Add GitHub link
              labels={["TypeScript", "React", "Tailwind", "Node.js"]}
              image="portfolio.png"
              onImageClick={openModal}
              completion={80} // Add completion percentage
            />
            <ProjectTile
              title="Portfolio Site v1"
              description="My original portfolio site made during Fall 2024 semester. I made this site mostly in HTML/CSS since I wasn't yet familiar with JavaScript. I used this site to learn the basics of web development."
              github="https://github.com/Lmx154/mywebsite" // Add GitHub link
              labels={["JavaScript", "React", "Node.js"]}
              image="portfolioog.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="Semester Project"
              description="This gradebook application was developed as the final project for my Software Engineering class, designed to streamline grade management for both teachers and teaching assistants. Acting as the SCRUM Master for this project, I successfully led my team to achieve a perfect score, ensuring the application met all requirements efficiently and effectively. I utilized my leadership skills to manage the development process using Jira, creating and assigning issues based on the provided REST canvas to maintain an organized workflow. The application was deployed to Render, with its PostgreSQL database hosted on Neon.tech, ensuring smooth and reliable performance.

The application was built using Ruby on Rails (7.2.1) as the primary framework, with PostgreSQL for database management and Node.js and Yarn for additional dependencies. RVM was used for local Ruby version management, facilitating smooth development and collaboration. Testing was a critical focus of the project, with RSpec utilized for backend functionality and Cucumber for frontend/UI testing, ensuring a robust and bug-free application.

Key features of the gradebook include the ability for teachers and teaching assistants to view, create, update, delete, and sort grades, as well as view statistics on student performance. Access control was implemented to ensure role-specific functionality. The REST canvas served as the foundation for defining endpoints and application behavior, contributing to a clear and scalable architecture.

This project exemplifies my ability to lead a team, manage development workflows, and deliver a polished application that meets both technical and user needs. It also highlights my proficiency with modern tools and frameworks, including Rails, PostgreSQL, and automated testing with RSpec and Cucumber. Below is a link to my team's deployed project. You can use the following credentials to test it out: Email: ta@ta.com Password: default123"
              deploymentUrl="https://fp-gradebook-f24-team-f24-401.onrender.com"
              github="https://github.com/Lmx154/gradebook" // Add GitHub link
              labels={["Ruby", "Ruby on Rails", "SQL", "Postgres"]}
              image="semesterproject.png"
              onImageClick={openModal}
              completion={100} // Add completion percentage
            />
            <ProjectTile
              title="SENTINEL"
              description="SENTINEL (System for Environmental Telemetry IN-flight ELectronics) is my current focus as a member of the UTRGV Rocket Launchers telemetry team. Working alongside talented teammates Andrew Alvarez and Ramon Garcia, I'm contributing to the development of this next-generation rocket telemetry system that builds upon the successful prototype I created with TDAS-GUI.

              As a core developer on the project, I've been instrumental in implementing several critical features, including the real-time data visualization components and the event-driven architecture that enables seamless communication between the hardware and software layers. My experience from developing TDAS-GUI has proven invaluable in identifying potential challenges and suggesting architectural improvements that enhance the system's reliability and performance.

              The system provides comprehensive flight monitoring capabilities, including real-time 3D rocket orientation tracking, flight trajectory visualization, and detailed sensor telemetry analysis. These features are crucial for the team's rocket launches, providing essential data for both real-time decision-making and post-flight analysis.

              This collaborative project showcases not only my technical abilities in full-stack development but also my capacity to work effectively in a team environment, contribute to complex architectural decisions, and apply lessons learned from previous projects to create more robust solutions. While TDAS-GUI served as a proof of concept, SENTINEL represents the maturation of those ideas into a production-ready system that will serve the team's needs for years to come."
              github="https://github.com/andrewalvrz/SENTINEL"
              labels={["Rust", "Tauri", "Tailwind", "JavaScript", "React"]} // Adjust labels as needed
              image="sentinel.png"
              onImageClick={openModal}
              completion={60} // Adjust completion percentage as needed
            />
            <ProjectTile
              title="Chatbot Demo"
              description="This project demonstrates my exploration into AI-powered documentation assistance, featuring a specialized chatbot designed to help developers understand and navigate complex codebases. Built with Python, the system leverages advanced language models and vector similarity search to provide contextual responses about code and documentation.

              The chatbot implements a sophisticated text processing pipeline that begins with ingesting source code and documentation from a combined text file. Using FAISS (Facebook AI Similarity Search), the system creates efficient vector embeddings of the text, chunked into manageable sections for optimal retrieval. When users submit queries, these are converted into vector embeddings and matched against the indexed content using similarity search to find the most relevant context.

              For response generation, I integrated the Hugging Face API, implementing a careful prompt engineering approach that combines the user's query with retrieved context to generate accurate, contextual responses. The system is designed to be configurable through environment variables, allowing for easy API token management and system customization.

              This project showcases my ability to work with modern AI technologies and create practical developer tools. While addressing limitations such as context window constraints and API rate limits, the chatbot demonstrates effective use of vector databases, embedding models, and large language models for technical documentation assistance."
              github="https://github.com/Lmx154/chatbot"
              labels={["Python"]} // Adjust labels as needed
              image="chatbot.png"
              onImageClick={openModal}
              completion={70} // Adjust completion percentage as needed
            />
            <ProjectTile
              title="SARE Clinostat project"
              description="A modern desktop application for controlling and monitoring clinostat motor RPM. Built with Tauri 2.0 using a Rust backend and React frontend, it offers real-time RPM monitoring, direct motor control, and preset management. An embedded ESP32 bridge enables robust bidirectional communication via ESP-NOW."
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
