"use client";

import { motion } from 'framer-motion';
import { style } from 'framer-motion/client';
import Image from 'next/image';

const projects = [
  {
    name: 'Furniro E-Commerce',
    description: 'Furniro E-commerce is Provide Easily Online Shopping in Stylish Furniture.',
    image: '/images/Capture.PNG', // Add your image to the public folder
    link: 'https://hackathon-2-weld.vercel.app/',
  },
  {
    name: 'Static Resume',
    description: 'create a static resume from a  specified parameters',
    image: '/images/ROUTE_CV.jpg', // Add your image to the public folder
    link: 'https://mileston-1-staric-resume.vercel.app/',
  },
  {
    name: 'Dynamic Resume Builder',
    description: 'Dynamic Resume Builder in Provid Easily Create Professional Resume.',
    image: '/images/resume2.jpg', // Add your image to the public folder
    link: 'https://mileston-3-resume-builder.vercel.app/',
  },
  {
    name: 'Editable Resume Builder',
    description: 'Editable Resume Builder is provides the ability to  edit the Resume',
    image: '/images/resume3.jpg', // Add your image to the public folder
    link: 'https://mileston-4-editable-resume-sigma.vercel.app/',
  },
  {
    name: 'Mr Basit Hair Saloon',
    description: 'Mr Basit Hair Saloon Owner provides his experience with the stylish Hair`s & Beard style ...etc.',
    image: '/images/logo2.png', // Add your image to the public folder
    link: 'https://static-website-self.vercel.app/',
  },
  {
    name: 'AgriBlog',
    description: 'Our AgriBlog offers insightful articles, expert tips, and the latest trends in sustainable farming, crop management, and agritech innovations.',
    image: '/images/AgriBlog.PNG', // Add your image to the public folder
    link: 'https://dream-big-project.vercel.app/',
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="container mx-auto pt-20">
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