import buttonIcon from '../assets/button_icon.svg';
import linkedinIcon from '../assets/linkedin_icon.svg';
import behanceIcon from '../assets/behance_icon.svg';
import twitterIcon from '../assets/x_icon.svg';
import youtubeIcon from '../assets/yt_icon.svg';
import newsletterIcon from '../assets/footer_newsletter_icon.svg';
import dsLogo from '../assets/ds_logo_footer.svg';

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] dark:bg-[#121212] text-white mt-20 px-6 sm:px-12 md:px-24 py-0 rounded-t-[2rem]">
      <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-20 mt-10">
        
        {/* Top CTA */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-left text-white dark:text-gray-200">
            Let’s Connect there
          </h2>
          <button className="flex items-center gap-2 bg-[#1465ff] text-white text-lg px-6 py-2 rounded-[100px] font-medium hover:bg-blue-700 transition">
            Hire Me
            <img src={buttonIcon} alt="Arrow Icon" className="w-5 h-5" />
          </button>
        </div>

        <hr className="border-gray-600 dark:border-gray-700 mb-12" />

        {/* Footer Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:grid-rows-1 text-sm text-left">
          
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
              <a href="#"><img src={dsLogo} alt="LinkedIn" className="w-10 h-10 rounded-full bg-blue-600" /></a>
              </div>
              <span className="text-xl font-bold font-mono text-white dark:text-gray-200">Digbijay Saikia</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
              Digbijay Saikia is a UI/UX Designer and Web Developer focused on
              crafting intuitive, user-centered digital experiences.
            </p>
            <div className="flex gap-4">
              <a target="_blank" href="https://www.linkedin.com/in/digbijay-saikia/"><img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 rounded-full bg-white p-1" /></a>
              <a target="_blank" href="https://www.behance.net/digbijaysaikia"><img src={behanceIcon} alt="Behance" className="w-10 h-10 rounded-full bg-white p-1" /></a>
              <a target="_blank" href="https://x.com/diku1235"><img src={twitterIcon} alt="Twitter" className="w-10 h-10 rounded-full bg-white p-1" /></a>
              <a target="_blank" href="https://www.youtube.com/channel/UCapinH5QNPvmEkA_iqVVKfg"><img src={youtubeIcon} alt="YouTube" className="w-10 h-10 rounded-full bg-white p-1" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white dark:text-gray-200 mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white dark:text-gray-200 mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>+91 7896167516</li>
              <li>digbijaysaikia@outlook.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white dark:text-gray-200 mb-3">Get the latest information</h4>
            <form className="flex mt-3">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded-l-full outline-none"
              />
              <button
                type="submit"
                className="bg-[#1465ff] px-4 py-2 rounded-r-full hover:bg-blue-700 transition"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <img src={newsletterIcon} alt="Send Icon" className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center mt-12 text-gray-400 dark:text-gray-500 text-sm">
          © 2025 Digbijay Saikia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
