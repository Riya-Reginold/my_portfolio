'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGithub,
  FaPython,
  FaJava,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiVercel,
} from 'react-icons/si'

import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cardHover,
} from '@/utils/animations'
import { BiLogoVisualStudio } from 'react-icons/bi'
import { TbBrandFramerMotion } from 'react-icons/tb'

const Skills = () => {
  return (
    <motion.section
      className="px-6 md:px-12"
     {...fadeIn}
        transition={{ delay: 0.2 }}
 
    >
      
      <div className="container max-w-7xl mx-auto pt-20 pb-10">
        <motion.h2 className="section-title" {...fadeInUp}>
          My Skills
        </motion.h2>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
             variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

         
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
              Frontend
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-2"><FaHtml5 className="text-orange-500" /> HTML5</li>
              <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-500" /> CSS3</li>
              <li className="flex items-center gap-2"><FaJsSquare className="text-yellow-400" /> JavaScript</li>
              <li className="flex items-center gap-2"><SiTypescript className="text-blue-600" /> TypeScript</li>
              <li className="flex items-center gap-2"><FaReact className="text-sky-400" /> React</li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-gray-900 dark:text-white" /> Next.js</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-teal-400" /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><SiRedux className="text-purple-500" /> Redux</li>
              <li className="flex items-center gap-2"><TbBrandFramerMotion  className=" bg-gradient-to-r from-[#0055FF] to-[#A855F7]" /> Framer Motion</li>
            </ul>
          </motion.div>

         
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
              Backend
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-600" /> Node.js</li>
              <li className="flex items-center gap-2"><FaDatabase className="text-indigo-500" /> REST APIs</li>
              <li className="flex items-center gap-2"><FaPython className="text-yellow-500" /> Python</li>
              <li className="flex items-center gap-2"><FaJava className="text-red-600" /> Java</li>
              <li className="flex items-center gap-2"><SiMysql className="text-blue-500" /> MySQL</li>
              <li className="flex items-center gap-2"><SiPostgresql className="text-sky-700" /> PostgreSQL</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-500" /> MongoDB</li>
            </ul>
          </motion.div>

          
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
              Tools & Others
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-2"><FaGitAlt className="text-orange-600" /> Git</li>
              <li className="flex items-center gap-2"><FaGithub className="text-gray-800 dark:text-gray-100" /> GitHub</li>
              <li className="flex items-center gap-2"><FaDocker className="text-blue-500" /> Docker</li>
              <li className="flex items-center gap-2"><FaAws className="text-yellow-500" /> AWS</li>
              <li className="flex items-center gap-2"><FaDatabase className="text-indigo-400" /> CI/CD</li>
              <li className="flex items-center gap-2"><BiLogoVisualStudio className="text-sky-400" /> VS Code</li>
              <li className="flex items-center gap-2"><SiPostman className="text-orange-500" /> Postman</li>
              <li className="flex items-center gap-2"><SiVercel className="w-5 h-5 text-black" /> Vercel</li>
              
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
