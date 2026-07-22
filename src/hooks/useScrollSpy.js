

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
      const scrollY = window.scrollY;
      let current = activeId;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = id;
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

