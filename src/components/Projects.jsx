export default function Projects() {
    const projects = [
      { title: "Keniclean", desc: "Laundry booking UX experience", link: "#" },
      { title: "Carbonscale", desc: "Carbon accounting platform UI", link: "#" },
      { title: "RideKaro", desc: "Bike rental Android app", link: "#" }
    ];
  
    return (
      <section id="projects" className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <a href={proj.link} className="text-blue-500 underline">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  