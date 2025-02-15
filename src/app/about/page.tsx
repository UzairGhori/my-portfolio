"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="container mx-auto max-w-4xl pt-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl mt-20 font-[inter] font-bold text-center text-primary mb-8 animate-bounce"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl font-serif text-gray-300 leading-relaxed"
          >
            Hi, I’m <span className="text-primary font-semibold">Abdul Uzair</span>, a passionate and detail-oriented <span className="text-primary font-semibold">Frontend Developer</span> with expertise in building modern, responsive, and user-friendly web applications. I specialize in using cutting-edge technologies like <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">TailwindCSS</span>, and <span className="text-primary font-semibold">TypeScript</span> to create pixel-perfect, high-performance websites.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xl text-gray-300 font-serif leading-relaxed mt-4"
          >
            With a strong foundation in <span className="text-primary font-semibold">HTML</span>, <span className="text-primary font-semibold">CSS</span>, and <span className="text-primary font-semibold">JavaScript</span>, I bring ideas to life by crafting intuitive and visually appealing interfaces. I’m passionate about creating seamless user experiences and constantly strive to stay updated with the latest trends and best practices in web development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-xl text-gray-300 font-serif leading-relaxed mt-4"
          >
            When I’m not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my creativity and problem-solving skills. Let’s build something amazing together!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}