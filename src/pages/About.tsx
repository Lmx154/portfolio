import React from 'react';
import { AttachmentTile, TextTile, PictureTile } from '../components/Tile';

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[800px] w-full mx-auto px-4 space-y-8 my-20">
        <TextTile 
          title="About Me" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
        <PictureTile 
          title="Frontera Hacks 2024" 
          description="team picture at Frontera Hacks 2024."
          image="/fronterahacks2024.JPG" // Replace with the actual image path
        />
        <AttachmentTile
          title="My Resume"
          description=""
          viewUrl="/resumedark.pdf"
          downloadUrl="/resume.pdf"
          fileName="resume.pdf"
        />
      </div>
    </div>
  );
};

export default About;
