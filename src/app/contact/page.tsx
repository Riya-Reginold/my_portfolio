'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/contactAPI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-400'>
        Let&apos;s connect and build something meaningful
      </h4>

      <motion.h2 className='section-title mb-13' {...fadeInUp}>
        Contact Me
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      
        <motion.div className='space-y-8' {...slideInLeft}>
          <h2 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Get in Touch</h2>
          <p>Looking for the right opportunity to launch my career and contribute to innovative projects.</p>

          <motion.div className='space-y-4' {...fadeIn}>
            <div className='flex items-center gap-4'>
              <FaEnvelope className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-semibold'>Email</h3>
                <Link href='mailto:riyareginoldkalluvalappil@gmail.com' className="text-secondary hover:text-primary">
                  riyareginoldkalluvalappil@gmail.com
                </Link>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaPhone className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-semibold'>Phone</h3>
                <p className="text-secondary hover:text-primary">+49 15145914607</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='h-6 w-6 text-primary' />
              <div>
                <h3 className='font-semibold'>Location</h3>
                <p className="text-secondary hover:text-primary">Chemnitz, Saxony, Germany</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

       
        <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" {...slideInRight}>
          {status === "success" ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your message has been successfully sent. I will get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
