import { Project } from '@/types/types';
import Image from 'next/image';


export default function ProjectCard( project: Project) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            {project.icon} {project.title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          <div className="flex flex-wrap mt-2 gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm">
          <p className="text-gray-500">Year: {project.year}</p>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Kunjungi
          </a>
        </div>
      </div>
    </div>
  );
}
