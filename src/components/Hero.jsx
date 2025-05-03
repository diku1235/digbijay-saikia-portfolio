import heroImg from '../assets/hero.png';
import WhatsAppButton from './WhatsAppButton';
import ScrollingStrap from '../components/ScrollingStrap';

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-28 max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-6 lg:mt-10">
      {/* Main content with responsive spacing */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 md:mb-20 lg:mb-10 gap-8 sm:gap-12 md:gap-12 lg:gap-16">
        {/* Left content */}
        <div className="md:w-1/2 lg:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Hi<span className="inline-block animate-wave origin-[70%_70%]">👋</span>,<br />
            I’m <span className="text-black">Digbijay Saikia</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg sm:text-lg md:text-lg lg:text-2xl">
            Freelance <strong>UI/UX Designer</strong> creating user-centered designs that drive results, with expertise in wireframing, prototyping, and seamless interfaces.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white text-lg sm:text-xl md:text-2xl font-medium sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition-all">
          Download CV
          </button>
            
            {/* WhatsApp Button */}
            <WhatsAppButton phoneNumber="917896167516" />
          </div>
        </div>

        {/* Right avatar */}
        <div className="relative md:w-1/2 mt-8 md:mt-0">
          <img
            src={heroImg}
            alt="Hero illustration of Digbijay Saikia"
            className="w-120 sm:w-[600px] md:w-[600px] lg:w-[700px] mx-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Scroll Strap */}
      
      <div className="absolute lg:top-[840px] md:top-[60%] left-1/2 -translate-x-1/2 w-screen z-10 transform">
        <ScrollingStrap />
      </div>

      {/* 
      <div className="overflow-hidden absolute h-10 bg-gray-950 lg:top-[820px] md:top-[60%] left-1/2 -translate-x-1/2 w-screen z-9 transform">
      </div>
       */}

    </section>
  );
}
