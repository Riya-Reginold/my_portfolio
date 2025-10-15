
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
     <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-3 py-8">
         <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 space-y-1">
            <p className="text-sm text-secondary">
              © 2025 Riya Reginold Kalluvalappil.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 hover:text-primary transition-colors cursor-default">
              Built with React, Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
           <div className="flex space-x-6 mb-2">
              <a
                href="https://github.com/Riya-Reginold"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/riya-reginold-kalluvalappil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6"></div>
      </div>
    </footer>
  )
}

export default Footer