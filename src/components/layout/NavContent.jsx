import React from 'react'

const NavContent = ({ activeId, onNavClick }) => {
  return (
    <div className='relative flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28'>
      <div>
        <div className='block py-[25px] text-2xl'>
          <a href="#home">
            <span className='text-ink'>TrueSoci</span>
            <span className='text-[#CFF747]'>al.</span>
          </a>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <button
          type="button"
          onClick={onNavClick}
          aria-label="Open menu"
          className='text-xl text-base transition-colors duration-500 hover:text-ink xl:hidden'
        >
          <i className='fa fa-bars' aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}

export default NavContent