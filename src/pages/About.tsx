import React from 'react';
import { TextTile, PictureTile } from '../components/Tile';

const About: React.FC = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="flex justify-center w-full mb-20">
        <div className="w-[200px] h-[2px] bg-gray-700 rounded-full"></div>
      </div>
      <img
        src="/profile.jpg"
        alt="Portrait"
        className="w-64 h-64 rounded-full object-cover drop-shadow-lg mb-8 glow-effect"
      />
      <div className="max-w-[800px] landscape:max-w-[1600px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 landscape:grid-cols-[800px,800px] landscape:justify-center gap-8">
          <div className="space-y-8 landscape:flex landscape:flex-col">
            <div className="landscape:flex-grow">
              <TextTile 
                title="About Me" 
                description=" Hello! I'm a software developer based in Weslaco, Texas, currently pursuing a Bachelor’s degree in Computer Science at the University of Texas Rio Grande Valley (UTRGV). My journey into technology began at a young age, driven by a passion for problem-solving and creativity. My first experiences with programming involved modding games and building simple websites, sparking a lifelong interest in tech.

Before transferring to UTRGV, I earned an Associate’s degree in Computer Science from South Texas College. During this time, I also gained hands-on experience in IT, working for approximately two years and deepening my understanding of computer hardware and system management.

At UTRGV, I’m an active member of the Rocket Launchers Club, where I collaborate with like-minded individuals on exciting aerospace projects. Additionally, I frequently attend hackathons, where I enjoy tackling challenges, learning from peers, and networking with other passionate developers. I value building strong connections within the tech community and sharing knowledge through collaboration and teamwork.

I’m passionate about continuous learning and innovation. I love exploring emerging technologies, researching their applications, and integrating them into my projects. Whether it's developing software, solving technical challenges, or diving into new frameworks, I’m always eager to expand my skills and take on new challenges.

Feel free to download my resume and explore the gallery below to see highlights from my experiences."
                downloadUrl="/resume.pdf"
                downloadLabel="Download Resume"
              />
            </div>
            
            {/* Grid container for personality tiles */}
            <div className="grid grid-cols-3 gap-4">
              <TextTile 
                title="Productive" 
                description=""
                icon={
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="12" y="12" width="40" height="40" rx="4" />
                    <path d="M22 26 L30 34 L42 22" />
                    <path d="M22 36 H42" />
                  </svg>
                }
              />
              <TextTile 
                title="Self-Learner" 
                description=""
                icon={
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 16H28C33 16 36 20 36 24V40C36 44 33 48 28 48H16z" />
                    <path d="M28 16H48C53 16 56 20 56 24V40C56 44 53 48 48 48H28z" />
                    <circle cx="32" cy="12" r="4" />
                  </svg>
                }
              />
              <TextTile 
                title="Problem Solver" 
                description=""
                icon={
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="
                      M18 22
                      a4 4 0 0 1 8 0
                      v4
                      h4
                      a4 4 0 0 1 0 8
                      h-4
                      v4
                      a4 4 0 0 1 -8 0
                      v-4
                      h-4
                      a4 4 0 0 1 0 -8
                      h4
                      z
                    " />
                    <path d="
                      M38 38
                      a4 4 0 0 1 8 0
                      v4
                      h4
                      a4 4 0 0 1 0 8
                      h-4
                      v4
                      a4 4 0 0 1 -8 0
                      v-4
                      h-4
                      a4 4 0 0 1 0 -8
                      h4
                      z
                    " />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="space-y-8 landscape:flex landscape:flex-col">
            <div className="landscape:flex-shrink-0">
              <PictureTile 
                title="Frontera Hacks 2024" 
                description=" "
                image="/fronterahacks2024.JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
