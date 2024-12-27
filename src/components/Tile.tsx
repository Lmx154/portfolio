import React from 'react';

interface TextTileProps {
  title: string;
  description: string;
}

interface PictureTileProps {
  title: string;
  description: string;
  image: string;
}

export const TextTile: React.FC<TextTileProps> = ({ title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export const PictureTile: React.FC<PictureTileProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};
