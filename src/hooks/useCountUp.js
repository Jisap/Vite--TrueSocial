import { useEffect, useState } from "react"
import useInView from "./useInView"

/**
 * Counts up from 0 to `target` once the returned ref scrolls into view.
 * Consolidates the original theme's two separate mechanisms (an instant
 * "odometer" reveal via jquery.appear, and a jQuery.animate count-up for
 * ".count-text") into one accessible, dependency-free implementation.
 */


const useCountUp = (target, { duration = 1600 } = {}) => {

  const [inView, ref] = useInView({ threshold: 0.5 })
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    // Respect reduced-motion preference: jump straight to the final value.
    const prefersReducedMotion =                                                // Se guarda la preferencia de motion del usuario
      typeof window !== "undefined" &&                                          // Si la ventana existe y
      window.matchMedia("(prefers-reduced-motion: reduce)").matches             // si el usuario prefiere motion reducido

    if (prefersReducedMotion) {                                                 // Si el usuario prefiere motion reducido
      setValue(target)                                                        // Se actualiza el estado para indicar que el valor ha llegado al objetivo
      return undefined;                                                       // Se sale de la función
    }

    let frame;                                                                // Se inicializa la variable frame
    const start = performance.now();                                          // Se guarda el tiempo inicial

    const tick = (now) => {                                                   // Función que se ejecuta en cada frame
      const progress = Math.min((now - start) / duration, 1);                 // Se calcula el progreso
      const eased = 1 - (1 - progress) * (1 - progress);                       // Se aplica la curva de easing
      setValue(Math.floor(eased * target));                                   // Se actualiza el estado con el valor actual
      if (progress < 1) {                                                       // Si el progreso es menor a 1
        frame = requestAnimationFrame(tick);                                  // Se solicita el siguiente frame
      } else {                                                                  // Si el progreso es mayor o igual a 1
        setValue(target)                                                      // Se actualiza el estado con el valor final
      }
    };

    frame = requestAnimationFrame(tick);                                    // Se solicita el siguiente frame
    return () => cancelAnimationFrame(frame);                               // Se cancela el frame

  }, [inView, target, duration])                                               // Se ejecuta cuando cambia inView, target o duration

  return [ref, value]                                                         // Se devuelve la ref y el valor
}

export default useCountUp