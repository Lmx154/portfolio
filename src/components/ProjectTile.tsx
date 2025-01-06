import { memo } from 'react';

interface ProjectTileProps {
  title: string;
  description: string;
  link: string;
  github?: string; // Add optional GitHub link
  labels: string[];
  image?: string; // Optional image URL
  onImageClick: (imageUrl: string) => void;
}

const getLabelColors = (label: string) => {
  const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
    'React': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' },
    'JavaScript': { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/30' },
    'TypeScript': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' },
    'Rust': { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/30' },
    'Python': { bg: 'bg-gradient-to-r from-blue-500/20 to-yellow-500/20', text: 'text-yellow-300', border: 'border-blue-500/30' },
    'Tailwind': { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-500/30' },
    'Node.js': { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-500/30' },
    'C#': { bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-300', border: 'border-fuchsia-500/30' },
    'ASP.NET': { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' },
    'Postgres': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' },
    'SQL': { bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' },
    'Flutter': { bg: 'bg-sky-500/20', text: 'text-sky-300', border: 'border-sky-500/30' },
    'Dart': { bg: 'bg-teal-500/20', text: 'text-teal-300', border: 'border-teal-500/30' },
    'Tauri': { bg: 'bg-slate-500/20', text: 'text-slate-300', border: 'border-slate-500/30' },
    'Embedded': { bg: 'bg-lime-500/20', text: 'text-lime-300', border: 'border-lime-500/30' },
    'Ruby': { bg: 'bg-red-600/20', text: 'text-red-300', border: 'border-red-500/30' },
    'Ruby on Rails': { bg: 'bg-gradient-to-r from-red-500/20 to-white/20', text: 'text-red-300', border: 'border-red-600/30' },
  };

  return colorMap[label] || { bg: 'bg-indigo-500/20', text: 'text-indigo-300', border: 'border-indigo-500/30' };
};

const ProjectTile = memo(({ title, description, link, github, labels, image, onImageClick }: ProjectTileProps) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 ${image ? 'h-auto' : 'h-fit'}`}>
      {image ? (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={`${title} preview`}
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width="800"
            height="400"
            onClick={() => onImageClick(image)}
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        </div>
      ) : null}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {labels.map((label, index) => {
          const colors = getLabelColors(label);
          return (
            <span
              key={index}
              className={`px-2 py-1 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {label}
            </span>
          );
        })}
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <a href={link} className="text-indigo-400 hover:text-indigo-300 transition-colors">
          View Project
        </a>
        {github && (
          <a href={github} className="text-gray-400 hover:text-gray-300 transition-colors" aria-label="View on GitHub">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
});

ProjectTile.displayName = 'ProjectTile';

export default ProjectTile;
