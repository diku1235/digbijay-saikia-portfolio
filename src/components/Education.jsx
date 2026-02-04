import React, { useEffect, useRef, useState } from "react";

import smitLogo from "../assets/smit_logo.png";
import adbuLogo from "../assets/adbu_logo.jpg";

export default function Education() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const eduRefs = useRef([]);

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Sikkim Manipal Institute of Technology",
      duration: "2021 – 2023",
      logo: smitLogo,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Assam Don Bosco University",
      duration: "2018 – 2021",
      logo: adbuLogo,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);

          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    eduRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <section
      id="education"
      className="scroll-mt-28 max-w-[1400px] mx-auto px-5 sm:px-6 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white">
            My <span className="text-blue-600">Education</span>
        </h2>

        <div className="w-14 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />

        <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Academic background and professional qualifications
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto space-y-7 sm:space-y-10">

        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700" />

        {educationData.map((edu, index) => (
          <div
            key={index}
            ref={(el) => (eduRefs.current[index] = el)}
            data-index={index}
            className={`
              relative flex gap-4 sm:gap-6
              pl-12 sm:pl-16
              transition-all duration-700
              ${
                visibleIndexes.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }
            `}
          >
            {/* Timeline Dot */}
            <div className="
              absolute
              left-[18px] sm:left-[22px]
              top-6
              w-3.5 h-3.5 sm:w-4 sm:h-4
              rounded-full
              bg-blue-600
              border-4 border-white
              dark:border-[#121212]
            " />

            {/* Card */}
            <div className="w-full bg-white dark:bg-[#1f1f3a] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-start gap-3 sm:gap-4 text-left">

                {/* Logo */}
                <img
                  src={edu.logo}
                  alt={edu.institute}
                  className="
                    w-11 h-11 sm:w-14 sm:h-14
                    object-cover
                    rounded-lg
                    shadow-sm
                    flex-shrink-0
                  "
                />

                {/* Content */}
                <div className="flex-1 min-w-0">

                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-base text-blue-600 font-medium mt-0.5">
                    {edu.institute}
                  </p>

                  <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.duration}
                  </p>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
