import React, { useState } from 'react'
import Header from './components/layout/Header'
import { useScrollSpy } from './hooks/useScrollSpy';
import MobileNav from './components/layout/MobileNav';
import Preloader from './components/common/Preloader';
import CustomCursor from './components/common/CustomCursor';
import ChatWidget from './components/common/ChatWidget';
import Hero from './components/sections/Hero';
import Explore from './components/sections/Explore';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Counters from './components/sections/Counters';
import VideoBanner from './components/sections/VideoBanner';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import WhyChoose from './components/sections/WhyChoose';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "portfolio",
  "team",
  "testimonials",
  "blog"
]

export default function App() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS, 100);    // Usa el hook para obtener el ID activo.

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ChatWidget />

      <div className='relative mx-auto w-full min-w-[300px] overflow-hidden'>
        <Header
          activeId={activeId}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />

        <main>
          <Hero />
          <Explore />
          <About />
          <Services />
          <Counters />
          <VideoBanner />
          <Portfolio />
          <Process />
          <WhyChoose />
          <Team />
          <Testimonials />
        </main>

      </div>

      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  )
}
