"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-secondary text-primary p-4 fixed w-full top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-serif font-bold hover:text-white transition-colors">
          My Portfolio
        </h1>
        <nav className="space-x-4">
          <Link
            href="/"
            className="hover:text-white font-serif text-2xl transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-white font-serif text-2xl transition-colors"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:text-white font-serif text-2xl transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="hover:text-white font-serif text-2xl transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-white font-serif text-2xl transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}