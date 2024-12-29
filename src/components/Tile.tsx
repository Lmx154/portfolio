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

interface AttachmentTileProps {
  title: string;
  description: string;
  fileUrl: string;
  fileName: string;
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

export const AttachmentTile: React.FC<AttachmentTileProps> = ({ title, description, fileUrl, fileName }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <div className="mb-4 w-full aspect-[8.5/11] rounded-lg overflow-hidden">
        <iframe
          src={fileUrl}
          className="w-full h-full"
          title={title}
        />
      </div>
      <a 
        href={fileUrl}
        download={fileName}
        className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download {fileName}
      </a>
    </div>
  );
};
