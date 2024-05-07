/* eslint-disable react/prop-types */
import { PresentationSection } from './components/PresentationSection';
import {Menu} from './../src/components/Menu'
import { AboutMeSection } from './components/AboutMeSection';
function Home() {
  return(
    <>
    <div className='bg-[#f5f5f5] relative'>
      <PresentationSection></PresentationSection>
      <Menu />
      <AboutMeSection/>
    </div>
    </>
  )
}

export default Home;
