'use client';
import Image from 'next/image';
import { useState } from 'react';
import { PROJECTS } from '@/app/utils/constants';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all');
  const filteredProjects =
    activeTab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(activeTab));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Selected Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest projects in web and mobile development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white p-1 shadow-sm border border-gray-200">
            {(['all', 'web', 'mobile'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activeTab === tab
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {tab === 'all' ? 'All Projects' : tab === 'web' ? 'Web Apps' : 'Mobile Apps'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-56 md:h-64 lg:h-56 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.tags.includes('mobile') ? 'Mobile' : 'Web'}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center justify-between">
                  {/* <a
                    href={project.projectUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 hover:underline"
                  >
                    View Project <FiExternalLink />
                  </a> */}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* small CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
