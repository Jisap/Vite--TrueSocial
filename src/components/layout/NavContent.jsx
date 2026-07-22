import { navLinks } from "../../data/navLinks"
import ThemeButton from "../common/ThemeButton"


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
        {/* Botón de menu para móviles */}
        <button
          type="button"
          onClick={onNavClick}
          aria-label="Open menu"
          className='text-xl text-base transition-colors duration-500 hover:text-ink xl:hidden'
        >
          <i className='fa fa-bars' aria-hidden="true"></i>
        </button>

        <ul className='m-0 hidden list-none items-center p-0 xl:flex'>
          {navLinks.map((link) => {
            const isCurrent = activeId === link.href.slice(1);
            return (
              <li key={link.href} className="relative ml-10 first:ml-0 py-[43px]">
                <a
                  href={link.href}
                  className={`
                    relative flex items-center font-sans text-base font-medium capitalize leading-5
                    text-[#CFF747] after:absolute after:-bottom-[3px] after:left-0 after:right-0 after:h-[2px]
                    after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500
                    after:content-[""] hover:after:scale-x-100
                    ${isCurrent ? "after:scale-x-100" : ""}
                  `}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="hidden sm:block">
        <ThemeButton href="#contact" variant="dark">
          Get A Quote
          <span className="icon-arrow-up-right" aria-hidden="true"></span>
        </ThemeButton>
      </div>
    </div>
  )
}

export default NavContent