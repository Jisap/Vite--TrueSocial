import { useEffect } from "react"
import { navLinks } from "../../data/navLinks"





const MobileNav = ({ open, onClose }) => {

  useEffect(() => {
    document.body.classList.toggle("locked", open);         // Añade la clase locked si esta abierto
    return () => document.body.classList.remove("locked")   // La quita al limpiar
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (e) => {                          // Cerrar el menú al presionar Escape
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={`
            fixed left-0 top-0 z-[999] h-screen w-screen origin-left transition-[transform, visibility] duration-500
          ${open ? "visible translate-x-0 delay-0" : "invisible -translate-x-full delay-500"}`}
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 cursor-pointer bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className={`
            relative z-10 h-full w-[300px] max-w-[85vw] overflow-y-auto bg-ink px-4 pb-[30px] pt-[30px]
            transition-[opacity, transform] duration-500 sm:px-[15px]
            ${open
          ? "translate-x-0 opacity-100 delay-500"
          : "-translate-x-full opacity-0 delay-0"
        }
          `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <button
          type="button"
          className="absolute right-[15px] top-5 text-lg text-white"
          onClick={onClose}
          aria-label="Close mobile menu"
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>

        <div className="mb-10 flex">
          <a href="#home" className="text-2xl">
            <span className="text-white">TrueSoci</span>
            <span className="text-[#BFF747]">al.</span>
          </a>
        </div>

        <div className="border-t border-white/10">
          <ul className="m-0 list-none p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex h-[46px] items-center justify-between font-sans text-sm font-medium 
                  text-white transition-colors duration-500 hover:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mb-5 mt-5 list-none space-y-[15px] p-0">
          <li className="flex items-center text-sm font-medium text-white">
            <i className="fa fa-envelope mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-base text-[11px] text-ink" aria-hidden="true" />
            <a href="mailto:needhelp@truesocial.com" className="text-white transition-colors duration-500 hover:text-base">
              needhelP@truesocial.com
            </a>
          </li>
          <li className="flex items-center text-sm font-medium text-white">
            <i className="fa fa-phone mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-base text-[11px] text-ink" aria-hidden="true" />
            <a href="tel:7773338888" className="text-white transition-colors duration-500 hover:text-base">
              777-333-8888
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              aria-label="Twitter/X"
              className="fab fa-twitter relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-colors duration-500 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Facebook"
              className="fab fa-facebook-square relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-colors duration-500 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Pinterest"
              className="fab fa-pinterest-p relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-colors duration-500 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Instagram"
              className="fab fa-instagram relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-colors duration-500 hover:border-base hover:text-base"
            />


          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav