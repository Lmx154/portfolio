import React from 'react';
import { AttachmentTile, TextTile, PictureTile } from '../components/Tile';

const About: React.FC = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="flex justify-center w-full mb-20">
        <div className="w-[200px] h-[2px] bg-gray-700 rounded-full"></div>
      </div>
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

Feel free to explore the gallery below to see highlights from my experiences."
              />
            </div>
            <div className="landscape:flex-shrink-0">
              <PictureTile 
                title="Frontera Hacks 2024" 
                description=" "
                image="/fronterahacks2024.JPG"
              />
            </div>
          </div>
          <div className="flex items-start landscape:items-center w-full">
            <div className="w-full landscape:w-[800px]">
              <AttachmentTile
                title="My Resume"
                description="Download standard (non-dark) version of my resume below."
                viewUrl="/resumedark.pdf"
                downloadUrl="/resume.pdf"
                fileName="resume.pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
