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

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-300 ease-in-out ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
    >
      {/* Backdrop overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div
        className={`relative z-10 h-full w-[300px] max-w-[85vw] overflow-y-auto bg-ink px-4 pb-[30px] pt-[30px]
          transform transition-transform duration-300 ease-in-out sm:px-[15px] ${open ? "translate-x-0" : "-translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <button
          type="button"
          className="absolute right-[15px] top-5 text-lg text-white transition-colors duration-200 hover:text-base"
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

        <div>
          <ul className="m-0 list-none p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="border-t border-white/10">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex h-[46px] items-center justify-between font-sans text-sm font-medium 
                  text-white transition-colors duration-200 hover:text-base"
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
            <a href="mailto:needhelp@truesocial.com" className="text-white transition-colors duration-200 hover:text-base">
              needhelP@truesocial.com
            </a>
          </li>
          <li className="flex items-center text-sm font-medium text-white">
            <i className="fa fa-phone mr-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-base text-[11px] text-ink" aria-hidden="true" />
            <a href="tel:7773338888" className="text-white transition-colors duration-200 hover:text-base">
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
              text-base text-white transition-all duration-200 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Facebook"
              className="fab fa-facebook-square relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-all duration-200 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Pinterest"
              className="fab fa-pinterest-p relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-all duration-200 hover:border-base hover:text-base"
            />
            <a
              href="#"
              aria-label="Instagram"
              className="fab fa-instagram relative z-[1] mr-[10px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 
              text-base text-white transition-all duration-200 hover:border-base hover:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav