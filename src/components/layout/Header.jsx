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
    </>
  )
}

export default Header