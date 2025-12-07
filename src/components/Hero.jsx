import { motion } from 'framer-motion'; // Import framer-motion
import heroImg from '../assets/hero.png';
import WhatsAppButton from './WhatsAppButton';
import ScrollingStrap from '../components/ScrollingStrap';

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-6 lg:mt-10 dark:bg-[var(--background-dark)] dark:text-[var(--color-dark)]"
    >
      {/* Main content with responsive spacing */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 md:mb-20 lg:mb-10 gap-8 sm:gap-12 md:gap-12 lg:gap-16">
        
        {/* Left content with bottom-to-top animation */}
        <motion.div
          className="md:w-1/2 lg:text-left"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2  }}
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Hi<span className="inline-block animate-wave origin-[70%_70%]">👋</span>,<br />
            I’m <span className="text-black dark:text-gray-300">Digbijay Saikia</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg sm:text-lg md:text-lg lg:text-2xl">
            Freelance <strong>UI/UX Designer</strong> creating user-centered designs that drive results, with expertise in wireframing, prototyping, and seamless interfaces.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start gap-4">
            <a 
              href="https://drive.google.com/file/d/1GVDq4__rJeUUGYS_v1xbavAyoLcFqiXp/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white font-medium sm:px-6 px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
            >
              Download CV
            </a>

            {/* WhatsApp Button */}
            <WhatsAppButton phoneNumber="917896167516" />
          </div>
        </motion.div>

        {/* Right avatar with bottom-to-top animation */}
        <motion.div
          className="relative md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src={heroImg}
            alt="Hero illustration of Digbijay Saikia"
            className="w-120 sm:w-[600px] md:w-[600px] lg:w-[700px] mx-auto"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Scroll Strap with bottom-to-top animation */}
      <motion.div
        className="absolute md:top-[42rem] left-1/2 -translate-x-1/2 w-screen z-10 transform"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="scrolling-strap-container">
          <ScrollingStrap />
        </div>
      </motion.div>
    </section>
  );
}
