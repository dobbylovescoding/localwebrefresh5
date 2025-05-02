import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 to-primary-800 text-white pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-700/20 rounded-full -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-accent-500/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-700/30 text-primary-100 text-sm font-medium mb-4">
                Professional Web Solutions in Auckland
              </span>
              <h1 className="text-balance">Bringing Local Businesses Online with Expert Web Solutions</h1>
              <p className="mt-6 text-lg text-primary-100 max-w-xl">
                Specialized web development and tech solutions for small businesses in Auckland. 
                From building stunning websites to fixing technical issues, we're your local digital partner.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary"
              >
                Get Free Consultation
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-outline"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="md:col-span-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-700 to-primary-600/0 opacity-20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-primary-800/80 backdrop-blur-sm p-6 rounded-lg shadow-medium border border-primary-700/50">
                <h3 className="text-xl mb-4">Local Business Web Partner</h3>
                <ul className="space-y-3">
                  {['Professional Website Development', 'Business Email Setup', 'Web Presence Management', 'Technical Support'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-700 rounded-full mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="services"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-2 text-primary-100">Scroll to learn more</span>
          <ArrowDown size={20} className="text-primary-100" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;