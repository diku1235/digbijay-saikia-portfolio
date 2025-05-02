export default function Services() {
    return (
      <section id="services" className="max-w-[1400px] mx-auto px-6 py-20 font-inter">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["UI/UX Design", "Web Development", "App Design"].map((service, index) => (
            <div key={index} className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{service}</h3>
              <p className="text-gray-600">I deliver clean, user-centered, and responsive designs tailored to your goals.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  