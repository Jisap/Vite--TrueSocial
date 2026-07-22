import NavContent from './NavContent'
import useScrollState from '../../hooks/useScrollState'


const Header = ({ activeId, onOpenMobileNav }) => {

  const { isSticky } = useScrollState();

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
      <div className={`fixed left-0 top-0 z-[991] hidden w-full bg-white shadow-heaer transition-transform duration-500 xl:block
        ${isSticky ? "visible translate-x-0" : "invisible -translate-y-[120%]"}
        `}
      >
        <div className="mx-auto w-full">
          <NavContent activeId={activeId} onNavClick={onOpenMobileNav} />
        </div>
      </div>
    </>
  )
}

export default Header