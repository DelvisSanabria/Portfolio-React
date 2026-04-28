/* eslint-disable react/prop-types */
import { PresentationSection } from './components/PresentationSection';
import { Menu } from './components/Menu';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsSection } from './components/SkillsSection';
import { WorksSection } from './components/WorksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function Home() {
  return (
    <div className='bg-[#f5f5f5] relative top-[-60px]'>
      <Menu />
      <PresentationSection />
      <AboutMeSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
