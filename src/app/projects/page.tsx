"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    name: 'Project 1',
    description: 'A Next.js project with TailwindCSS and TypeScript.',
    image: '/images/profile.jpg', // Add your image to the public folder
    link: '#',
  },
  {
    name: 'Project 2',
    description: 'A responsive e-commerce website built with React.',
    image: '/images/project2.png', // Add your image to the public folder
    link: '#',
  },
  {
    name: 'Project 3',
    description: 'A portfolio website with advanced animations.',
    image: '/images/project3.png', // Add your image to the public folder
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="container mx-auto pt-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl mt-8 font-[inter] font-bold text-center text-primary mb-8 animate-bounce"
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={300}
                quality={100}
                className="w-full h-48 object-cover items-center rounded-xl"
              />
              <h2 className="text-xl font-bold mt-4 text-white">{project.name}</h2>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}