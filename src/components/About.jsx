import React, { useEffect, useRef, useState } from 'react';
import avatar from '../assets/about_avatar.png';

export default function About() {
  const barRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

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
      { threshold: 0.9 }
    );

    barRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  const skills = [
    { label: 'UI/UX Design', percent: '100%' },
    { label: 'Graphics Design', percent: '85%' },
    { label: 'App Design', percent: '95%' },
    { label: 'Web Development', percent: '90%' },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 mt-6 lg:mt-10 flex flex-col-reverse lg:flex-row items-center gap-10">
      {/* Avatar */}
      <div className="flex-shrink-0 w-full max-w-[400px] sm:max-w-[350px] md:max-w-[400px] mx-auto lg:mx-0">
        <img
          src={avatar}
          alt="Digbijay Saikia Avatar"
          className="rounded-3xl w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl">
          I’m Digbijay Saikia, a UI/UX Designer and Web Developer with an MCA and BCA background.
          I focus on creating clean, user-centered designs that align with both user needs and business goals.
        </p>

        {/* Progress Bars */}
        <div className="space-y-6">
          {skills.map((item, idx) => (
            <div
              key={idx}
              ref={el => (barRefs.current[idx] = el)}
              data-index={idx}
              className="w-full"
            >
              <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              <div className="w-full h-2 bg-gray-200 rounded-full relative mt-1">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{
                    width: visibleIndexes.includes(idx) ? item.percent : '0%',
                    transition: 'width 1s ease-in-out',
                  }}
                ></div>
                <div
                  className="absolute -top-1 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"
                  style={{
                    left: visibleIndexes.includes(idx)
                      ? `calc(${item.percent} - 10px)`
                      : '-10px',
                    transition: 'left 1s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
