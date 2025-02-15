"use client"; // Ensure this is a Client Component

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-secondary text-primary p-8 mt-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-4xl font-[inter] font-bold">Abdul Uzair</h3>
          <p className="mt-2 text-gray-300 text-xl font-serif">Frontend Developer</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold">Social Media</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://github.com/UzairGhori"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/abdul-uzair-4616702b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/uzair.ghori.908"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Abdul Uzair. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}