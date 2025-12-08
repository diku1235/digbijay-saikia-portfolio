import './App.css';
import Navbar from './components/Navbar'; // ✅ Make sure the path is correct
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HeroStrap from './components/HeroStrap';

function App() {
  return (
    <>
      <Navbar />  {/* ✅ Navbar at the top */}
      <main className="pt-24"> {/* ✅ Prevents content from hiding behind fixed navbar */}
        <Hero />
        <HeroStrap />
        <Services />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
