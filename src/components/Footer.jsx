export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-900 text-white py-8 font-inter">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold">Digbijay Saikia</h4>
            <p className="text-sm">UI/UX Designer & Developer</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  