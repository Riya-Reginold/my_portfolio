'use client';
import Image from 'next/image'
import Link from 'next/link'
import React  from "react"
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, scaleIn } from '@/utils/animations';


const Hero = () => {
    return (
       <section className="min-h-screen flex flex-col justify-center -mt-10 md:-mt-16 container max-w-7xl mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center">
                <motion.div className="flex flex-col items-center mb-6"
                 {...scaleIn}
                 transition={{ delay: 0.2 }}>
                    <Image src="/profile_image.jpg"alt="profile image" width={130} height={130} 
                    className="rounded-full mb-4 w-45 h-45 object-cover ring-4 ring-indigo-400 shadow-lg shadow-indigo-500/30"/>
                    <motion.h1 className="text-3xl md:text-4xl font-bold  mb-2"
                    {...fadeInUp}
                     transition={{ delay: 0.3 }}>
                        Hi, I am <motion.span className='text-purple-600' {...fadeIn}
                        transition={{ delay: 0.8 }}>Riya </motion.span>
                    </motion.h1>
                    <h1 className="text-3xl sm:text-6xl lg:text-[30px] font-Ovo mt-2 text-indigo-600">
                    <Typewriter
                        words={['Software Developer','Frontend Developer','Web Developer']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}/>
                    </h1>
                    <p className="  text-black  dark:text-white max-w-xl mt-4">
                    I am a Passionate Software Developer based in Germany, building intuitive, modern web applications with elegant design and smooth user experiences.
                    </p>
                   </motion.div>
                   <motion.div className="flex justify-center space-x-4 mb-8"
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}>
                        <Link href="https://github.com/Riya-Reginold" target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-black hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-duration-300">
                        <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/riya-reginold-kalluvalappil/" target="_blank" rel="noopener noreferrer" 
                        className="text-2xl text-black hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                        <FaLinkedin />
                        </Link>
                        <Link href="https://www.xing.com/profile/RiyaReginold_Kalluvalappil/" target="_blank" rel="noopener noreferrer" 
                        className="text-2xl text-black hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                        <FaXing />
                        </Link>
                    </motion.div>
                    <div className='flex flex-col md:flex-row justify-center gap-4'>
                        <Link
                        href="/RIYA_REGINOLD_KALLUVALAPPIL_CV.pdf"  download 
                        className="bg-primary inline-block w-full  md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                        Download CV
                        </Link>
                  
                    
                        <Link
                        href="/contact"
                        className=" inline-block w-full bg-gray-500  md:w-auto text-black dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        Contact Me
                        </Link>
                      </div>
                </div>
        </section>

        )
    }

export default Hero