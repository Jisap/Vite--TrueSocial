

/**
 * Watches the given section ids and returns whichever one is currently "active"
 * (its top has scrolled past the header). Mirrors the offset logic of the original 
 * OnePageMenuScroll() in script.js so the nav highlights the same section at the 
 * sme section at the same scroll position.
 */

import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds = [], offset = 117) => {

  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;                               // Captura el scroll vertical.
      let current = activeId;

      for (const id of sectionIds) {                                  // Itera sobre los IDs.
        const el = document.getElementById(id);                       // Obtiene el ID de cada sección
        if (el) {                                                     // Si el ID existe.
          const top = el.offsetTop - offset;                          // Calcula la posición superior con el offset.
          const height = el.offsetHeight;                             // Calcula la altura del elemento.
          if (scrollY >= top && scrollY < top + height) {             // Si el scroll está entre el top y el bottom.
            current = id;                                             // Actualiza el ID activo.
          }
        }
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

