import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialization } from './components/Specialization';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Home() {
  return (
    <ThemeProvider>
      <div className='bg-[#0a0a0a] relative min-h-screen font-body'>
        <div className="noise-overlay"></div>
        <Navigation />
        <Hero />
        <About />
        <Specialization />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home;
