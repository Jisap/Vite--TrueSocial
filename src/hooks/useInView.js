import { useEffect, useRef, useState } from "react";


/**
 * Returns a ref to attach to an element and a boolean that flips to
 * `true` the first time that element enters the viewport. Used to
 * trigger scroll-reveal animations and count-up numbers exactly once,
 * replacing the original theme's jquery.appear + WOW.js combination.
 */

const useInView = ({ threshold = 0.25, rootMargin = "0px" }) => {

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // If the browser can't do IntersectionObserver, just show content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    // observer only need to be set up once, when the component mounts
    const observer = new IntersectionObserver( // Se crea un observer para detectar cuando el elemento entra en el viewport
      ([entry]) => {                           // entry es un objeto que contiene información sobre el elemento que se está observando
        if (entry.isIntersecting) {            // Si el elemento entra en el viewport
          setInView(true);                     // Se actualiza el estado para indicar que el elemento está en el viewport
          observer.disconnect()                // Se desconecta el observer para evitar que se ejecute de nuevo
        }
      }, {                                     // Opciones del observer
      threshold,                               // Porcentaje de visibilidad del elemento para que se considere en el viewport
      rootMargin                               // Margen del viewport
    });

    observer.observe(node);                    // Se empieza a observar el elemento
    return () => observer.disconnect();        // Se desconecta el observer cuando el componente se desmonta
  }, [threshold, rootMargin])

  return (inView, ref)
}

export default useInView