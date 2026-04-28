/* eslint-disable react/prop-types */
import { ThemeProvider } from './context/ThemeContext';
import { PresentationSection } from './components/PresentationSection';
import { Menu } from './components/Menu';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsSection } from './components/SkillsSection';
import { WorksSection } from './components/WorksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function Home() {
  return (
    <ThemeProvider>
       <div className='bg-[#f5f5f5] dark:bg-[#101736] relative min-h-screen transition-colors duration-300 font-sans'>
        <Menu />
        <PresentationSection />
        <AboutMeSection />
        <SkillsSection />
        <WorksSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home;
