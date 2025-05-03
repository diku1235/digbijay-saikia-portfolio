import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: "Carbonscale",
    image: project1,
    description:
      "A landing page for a carbon accounting company. I designed the full UI/UX in Figma to showcase their mission, services, and approach.",
    tags: ["UI/UX", "Figma", "Web Design"],
    link: "#", // Replace with actual link
  },
  {
    title: "Tacker",
    image: project2,
    description:
      "A B2B platform to find and connect with suppliers. I designed the landing page and supplier search flow in Figma.",
    tags: ["UI/UX", "Figma", "Web Design"],
    link: "#", // Replace with actual link
  },
  {
    title: "Keniclean",
    image: project3,
    description:
      "A laundry service platform where I improved the booking flow and user experience to make it intuitive and conversion-focused.",
    tags: ["UI/UX", "Figma", "Web Design"],
    link: "#", // Replace with actual link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-10 lg:mt-15"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black text-center">
        My <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Case studies reflecting my design thinking, attention to detail, and problem-solving skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffffff] rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="w-full mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
