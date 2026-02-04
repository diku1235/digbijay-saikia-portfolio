import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HeroStrap from "./components/HeroStrap";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [heroDone, setHeroDone] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-24 overflow-hidden">
        {/* Hero always loads first */}
        <Hero onFinish={() => setHeroDone(true)} />

        {/* Other sections only after hero animation */}
        {heroDone && (
          <>
            <HeroStrap />
            <Experience />
            <Services />
            <About />
            <Education />
            <Projects />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

export default App;
