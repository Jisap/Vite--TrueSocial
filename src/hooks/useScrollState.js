import { useEffect, useState } from "react"


/**
 * Tracks page scroll position and returns the two boolean flags the
 * original script.js derived from it:
 *  - isSticky: header should switch to its fixed/condensed state (>300px)
 *  - showScrollTop: the "back to top" button should be visible (>500px)
 * Thresholds are ported directly from assets/js/script.js.
 */

const useScrollState = () => {

  const [isSticky, setIsSticky] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;    // Captura el scroll vertical.
      setIsSticky(y > 300);        // Si baja 300px, se activa el estado Sticky.
      setShowScrollTop(y > 500);   // Si baja 500px, se muestra el botón de scroll.
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isSticky, showScrollTop };
}

export default useScrollState