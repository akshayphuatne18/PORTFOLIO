import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'DDoS Protection Tool',
      description: 'A comprehensive tool for detecting, protecting against, and recovering from DDoS attacks. Features real-time traffic monitoring, ML-based anomaly detection, and automated scaling.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600',
      tags: ['Machine Learning', 'Security', 'Cloud Computing'],
    },
    {
      title: 'SAR Image Colorization',
      description: 'Deep learning model for colorizing Synthetic Aperture Radar (SAR) images, enhancing visualization and analysis capabilities.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600',
      tags: ['Deep Learning', 'Computer Vision', 'Image Processing'],
    },
    {
      title: 'Job Seeker Platform',
      description: 'Full-stack platform connecting job seekers with opportunities. Features include user management, job posting, and application tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600',
      tags: ['MERN Stack', 'Full Stack', 'Cloud'],
    },
    {
      title: 'Mystery Messenger',
      description: 'A privacy-focused messaging application with unique creative interaction features.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600',
      tags: ['React', 'Node.js', 'WebSocket'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}