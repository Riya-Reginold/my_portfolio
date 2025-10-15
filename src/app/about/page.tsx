'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  staggerContainer, 
  cardHoverSmall, 
  scaleIn
} from '@/utils/animations'

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">

    
      <motion.h4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInDown}
        className="text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-400"
      >
        Get to know more
      </motion.h4>

      <motion.h2
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
        className="section-title text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* About Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="mb-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          
          
          <div className="w-48 h-50 md:w-64 md:h-64 flex-shrink-0 rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700">
            <Image
              src="/about_pic.jpeg"
              alt="Profile picture"
              width={300}
              height={350}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-indigo-700 dark:text-indigo-200 text-md leading-relaxed text-justify">
              I am a passionate Software Developer and a recent Master&apos;s graduate from
              <span className="font-semibold"> Chemnitz University of Technology, Germany</span>.
              This is my second Master&apos;s degree, following a Master of Computer Applications from India, 
              which reflects my commitment to continuous learning and growth. 
              I specialize in building modern, responsive web applications with a strong focus 
              on front-end development using technologies like React, HTML, CSS, JavaScript, Next.js, TypeScript, and Tailwind CSS. 
              I am driven by curiosity and creativity, and I am now seeking an opportunity to launch my career as a software developer, 
              where I can combine my technical expertise and academic knowledge to deliver innovative, impactful solutions.
            </p>
          </div>

        </div>
      </motion.section>

     
      <div className="mb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">

          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 mb-16 md:mb-0"
          >
            <motion.h4
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="section-title mb-6"
            >
              Experience
            </motion.h4>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={cardHoverSmall.whileHover}
              >
                <h4 className="text-l font-semibold mb-2">Internship & Master&apos;s Thesis - Automotive Cyber security (1 Year 4 Months)</h4>
                <p className="text-primary mb-2">ARRK Engineering GmbH, Munich, Germany | Aug 2023 - Nov 2024</p>
                <ul className="text-black dark:text-secondary list-disc list-inside space-y-2 text-justify">
                  <li>Developed an automated privacy threat modeling tool using LINDDUN and SQL-based database solutions, improving privacy compliance and data flow optimization in vehicle functions.</li>
                  <li>Proposed and prototyped innovative HMI concepts with a focus on usability, transparency, and accessibility, using Figma and following a privacy-by-design approach.</li>
                  <li>Collaborated in cross-functional international teams (cybersecurity engineers, UX/UI designers, developers) to create user-centric interfaces for automotive applications.</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={cardHoverSmall.whileHover}
              >
                <h4 className="text-l font-semibold mb-2">Junior Software Engineer</h4>
                <p className="text-primary mb-2">Radianz Infotech, Kochi, India | Jan 2021 - June 2021</p>
                <ul className="text-black dark:text-secondary list-disc list-inside space-y-2 text-justify">
                  <li>Developed responsive, cross-platform web applications using HTML, CSS, JavaScript, and React.</li>
                  <li>Integrated REST-based APIs to support scalable enterprise platforms.</li>
                  <li>Applied OOP and clean code principles for maintainable software.</li>
                  <li>Participated in Agile Scrum teams, contributing to deployment, monitoring, testing, and code review.</li>
                  <li>Enhanced existing applications through performance optimization, debugging, and responsive design.</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>

        
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 mb-16 md:mb-0"
          >
            <motion.h4
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="section-title mb-6"
            >
              Education
            </motion.h4>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={cardHoverSmall.whileHover}
              >
                <h4 className="text-l font-semibold mb-2">Master&apos;s in Automotive Software Engineering</h4>
                <p className="text-primary mb-2">Technische Universität Chemnitz, Germany | Oct 2021 - May 2025</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={cardHoverSmall.whileHover}
              >
                <h4 className="text-l font-semibold mb-2">Master of Computer Application (MCA)</h4>
                <p className="text-primary mb-2">APJ Abdulkalam Technological University, Kerala, India | 2017 - 2020</p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={cardHoverSmall.whileHover}
              >
                <h4 className="text-l font-semibold mb-2">Bachelor of Science (B.Sc.) in Computer Science</h4>
                <p className="text-primary mb-2">Calicut University, Kerala, India | 2014 - 2017</p>
              </motion.div>
            </motion.div>
          </motion.section>

        </div>
      </div>

    </div>
  )
}

export default About
