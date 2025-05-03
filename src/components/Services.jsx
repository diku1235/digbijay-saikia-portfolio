import uiuxIcon from '../assets/uiux_icon.svg';
import webIcon from '../assets/web_icon.svg';
import graphicsIcon from '../assets/graphics_icon.svg';
import appIcon from '../assets/app_icon.svg';

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      icon: uiuxIcon, // Update paths as per your asset folder
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

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-10 lg:mt-15">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
        My <span className="text-blue-600">Services</span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Design and development solutions crafted to elevate user experience and meet business goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#E9EDF3] rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 h-24" />
            <h3 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
