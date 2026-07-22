import { useEffect } from "react"
import { navLinks } from "../../data/navLinks"





const MobileNav = ({ open, onClose }) => {

    useEffect(() => {
        document.body.classList.toggle("locked", open);         // Añade la clase locked si esta abierto
        return () => document.body.classList.remove("locked")    // La quita al limpiar
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
        <div className={`fixed left-0 top-0 z-[999] h-screen w-screen origin-left`}>

        </div>
    )
}

export default MobileNav