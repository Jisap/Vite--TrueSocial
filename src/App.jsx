import React, { useState } from 'react'
import Header from './components/layout/Header'
import { useScrollSpy } from './hooks/useScrollSpy';
import MobileNav from './components/layout/MobileNav';
import Preloader from './components/common/Preloader';
import CustomCursor from './components/common/CustomCursor';

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

      <div className='relative mx-auto w-full min-w-[300px] overflow-hidden h-[2000px]'>
        <Header
          activeId={activeId}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />

        <MobileNav
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
      </div>
    </>
  )
}
