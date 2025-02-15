"use client";

import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', percentage: 90 },
  { name: 'TailwindCSS', percentage: 95 },
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 95 },
  { name: 'TypeScript', percentage: 85 },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="container mx-auto pt-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-[inter] mt-8 font-bold text-center text-primary mb-8 animate-bounce"
        >
          Skills
        </motion.h1>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-primary">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="bg-primary h-2 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}