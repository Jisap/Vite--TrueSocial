import { useEffect, useRef } from "react"





const CustomCursor = () => {

  const cursorRef = useRef(null);
  const cursorTwoRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.("(pointer: coarse)").matches) return undefined; // Si el dispositivo es tactil, no se muestra el cursor

    const handleMove = (e) => {                                             // Esta función se ejecuta cada vez que el mouse se mueve
      if (cursorRef.current) {                                              // Si el mouse se mueve, se actualiza la posicion del cursor
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      if (cursorTwoRef.current) {                                           // Si el mouse se mueve, se actualiza la posicion del cursor
        cursorTwoRef.current.style.left = `${e.clientX}px`;
        cursorTwoRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorTwoRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[999999] hidden h-[25px] w-[25px] -translates-x-1/2 -translate-y-1/2 rounded-full
        bg-base opacity-30 transition-[width,height,opacity] duration-300 md:block"
      />
    </>
  )
}

export default CustomCursor