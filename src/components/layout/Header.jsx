import React from 'react'
import NavContent from './NavContent'

const Header = ({ activeId, onOpenMobileNav }) => {
  return (
    <>
      <header className='relative z-[999] block w-full bg-transparent transition-all duration-500'>
        <nav className='relative block'>
          <div className='relative block bg-transparent'>
            <NavContent
              activeId={activeId}
              onNavClick={onOpenMobileNav}
            />
          </div>
        </nav>
      </header>

      {/* Fixed clone shown once the page has scrolled past 300px, mirroring the original theme's ".stricked-menu"/"sticky-fixed behavior." */}
      <div className=''>

      </div>
    </>
  )
}

export default Header