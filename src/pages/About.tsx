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
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              />
            </div>
            <div className="landscape:flex-shrink-0">
              <PictureTile 
                title="Frontera Hacks 2024" 
                description="team picture at Frontera Hacks 2024."
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
