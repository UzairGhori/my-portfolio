"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 animated-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-9xl font-[inter] font-bold text-primary animate-bounce transition-all initial-transition"
          >
            Abdul Uzair
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4 text-6xl font-serif text-white animate-pulse translate-10"
          >
        I&apos; am a  Frontend Developer
          </motion.p>
        </motion.div>
        <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  whileHover={{ scale: 1.1, rotate: 5 }}
  className="mt-8 md:mt-0"
>
  <Image
    src="/images/profile.jpg"
    alt="Abdul Uzair"
    width={200}
    height={200}
    className="w-96 h-96 rounded-full shadow-lg shadow-primary border-4 border-primary hover:shadow-3xl transition-all"
  />
</motion.div>
      </div>
    </section>
  );
}