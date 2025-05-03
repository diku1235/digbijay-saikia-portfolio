import React from 'react';

const projects = [
  {
    title: "Carbonscale",
    image: "/images/carbonscale.png", // Add correct image paths
    category: "Web Design",
    tags: ["UI/UX", "Figma"],
  },
  {
    title: "Northeast Voyage",
    image: "/images/northeast-voyage.png",
    category: "Web Design",
    tags: ["UI/UX", "Figma"],
  },
  {
    title: "Keniclean",
    image: "/images/keniclean.png",
    category: "Web Design",
    tags: ["UI/UX", "Figma"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-10 lg:mt-15">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
        My <span className="text-blue-600">Project</span>
      </h2>
      <p className="text-gray-500 mb-12 text-sm sm:text-base max-w-2xl mx-auto">
        Design and development solutions crafted to elevate user experience and meet business goals.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-[2rem] hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mx-auto"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-blue-700 font-semibold mt-3 text-sm">{project.category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
