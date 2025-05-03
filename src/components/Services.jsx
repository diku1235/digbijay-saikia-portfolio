import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import uiuxIcon from '../assets/uiux_icon.svg';
import webIcon from '../assets/web_icon.svg';
import graphicsIcon from '../assets/graphics_icon.svg';
import appIcon from '../assets/app_icon.svg';

export default function Services() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const serviceRefs = useRef([]);

  const services = [
    {
      title: "UI/UX Design",
      icon: uiuxIcon,
      description:
        "Designing user-friendly and visually appealing interfaces with a focus on usability and user satisfaction.",
    },
    {
      title: "Web Design",
      icon: webIcon,
      description:
        "Designing user-friendly and visually appealing interfaces with a focus on usability and user satisfaction.",
    },
    {
      title: "Graphics Design",
      icon: graphicsIcon,
      description:
        "Designing user-friendly and visually appealing interfaces with a focus on usability and user satisfaction.",
    },
    {
      title: "App Design",
      icon: appIcon,
      description:
        "Designing user-friendly and visually appealing interfaces with a focus on usability and user satisfaction.",
    },
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
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <section id="services" className="scroll-mt-28 max-w-[1400px] mx-auto px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white text-center">
        My <span className="text-blue-600">Services</span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto dark:text-gray-400">
        Design and development solutions crafted to elevate user experience and meet business goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => (serviceRefs.current[index] = el)}
            data-index={index}
            className={`bg-[#E9EDF3] dark:bg-[#21203d] rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-700 ease-in-out transform ${
              visibleIndexes.includes(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 h-20" />
            <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
