import React, { useEffect, useRef, useState } from 'react';

// Import company logos
import nrlLogo from '../assets/nrl_logo.jpg';
import kaizenLogo from '../assets/kaizen_logo.jpg';
// Add more if needed

export default function Experience() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const expRefs = useRef([]);

  const experiences = [
    {
      company: "Kaizen IT Services Pvt. Ltd.",
      logo: kaizenLogo,
      designation: "Jr. Software Developer",
      duration: "Jan 2026 – Present",
    },
    {
      company: "Numaligarh Refinery Limited",
      logo: nrlLogo,
      designation: "Software Developer Trainee",
      duration: "Nov 2024 – Nov 2025",
    },
    // Add more if needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.4 }
    );

    expRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <section
      id="experience"
      className="scroll-mt-28 max-w-[1400px] mx-auto px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white text-center">
        Work <span className="text-blue-600">Experience</span>
      </h2>

      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto dark:text-gray-400">
        Professional journey and hands-on industry experience.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={el => (expRefs.current[index] = el)}
            data-index={index}
            className={`bg-white dark:bg-[#21203d] rounded-2xl p-6 
            shadow-2xs hover:shadow-lg transition-all duration-700
            transform flex items-start gap-5
            ${
              visibleIndexes.includes(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >

            {/* Logo */}
            <img
            src={exp.logo}
            alt={exp.company}
            className="w-16 h-16 flex-shrink-0 object-cover rounded-xl"
            />


            {/* Details */}
            <div className="flex-1 text-left">

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                {exp.designation}
              </h3>

              <p className="text-sm sm:text-base text-blue-600 font-medium mt-0.5">
                {exp.company}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                {exp.duration}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
