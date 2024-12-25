import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { RiReactjsLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa'; // Java
import { SiCplusplus } from 'react-icons/si'; // C++
import { FaBootstrap } from 'react-icons/fa'; // Bootstrap
import { FaHtml5 } from 'react-icons/fa'; // HTML
import { FaCss3Alt } from 'react-icons/fa'; // CSS

function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-24 my-4">
      <h2 className="text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[ // Array of icon components and their corresponding colors
          { icon: RiReactjsLine, color: 'text-cyan-400' },
          { icon: FaJava, color: 'text-cyan-400' },
          { icon: FaGithub, color: 'text-white' },
          { icon: FaPython, color: 'text-yellow-400' },
          { icon: SiCplusplus, color: 'text-yellow-300' },
          { icon: FaBootstrap, color: 'text-purple-500' },
          { icon: FaHtml5, color: 'text-orange-600' },
          { icon: FaCss3Alt, color: 'text-blue-600' },
        ].map(({ icon: Icon, color }, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl border-4 border-neutral-800 mt-8 p-4`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log(`Hover started on ${Icon.displayName}`)}
            onHoverEnd={() => console.log(`Hover ended on ${Icon.displayName}`)}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
