import React from 'react';

// Star Icon with responsive size
const StarIcon = () => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
  >
    <path
      d="M21.0714 0.452503L27.5316 15.9393L43.38 21.4532L27.8932 27.9134L22.3793 43.7618L15.9191 28.275L0.0706907 22.7611L15.5575 16.3009L21.0714 0.452503Z"
      fill="white"
    />
  </svg>
);

const items = [
  'Graphics Design',
  'UI/UX Design',
  'Website Development',
  'App Design',
];

export default function ScrollingStrap() {
  return (
    <div className="overflow-hidden bg-blue-600 py-2">
      <div className="animate-marquee text-white font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl">
        <div className="flex items-center space-x-6 sm:space-x-8">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <div className="mr-2">{item}</div>
              <StarIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
