
import './App.css'
import Aboutme from './Component/Aboutme'

import Footer from './Component/Footer'
import Header from './Component/Header'
import Herosection from './Component/Herosection'
import SwiperSlider from './Component/SwiperSlider'
import Skill from './Component/Skill'
import { useRef } from 'react'

function App() {
  
  const ExprinceRef = useRef(null);
  const AboutmeRef = useRef(null);
  const SkillRef = useRef(null);
  const SwiperRef = useRef(null);
  const ContactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header scrollToSection={scrollToSection}
          ExprinceRef={ExprinceRef}
          AboutmeRef={AboutmeRef}
         SkillRef={SkillRef}
          SwiperRef={SwiperRef}
         ContactRef={ContactRef}
        />
      <Herosection/>
      <Aboutme ExprinceRef={ExprinceRef}/>
      <Skill SkillRef={SkillRef}/>
      <SwiperSlider SwiperRef ={SwiperRef} />
      
      <Footer ContactRef={ContactRef} />


    </>
  )
}

export default App
