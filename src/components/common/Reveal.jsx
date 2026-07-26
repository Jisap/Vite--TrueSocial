

const ANIMATION_CLASSES = {
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "fade-in-up": "animate-fade-in-up",
}

/**
 * Scroll-reveal wrapper. Replaces the original theme's two separate,
 * overlapping systems (WOW.js "wow fadeInLeft/Up/Right" classes on
 * cards, and the AOS "data-aos" attributes on the hero) with one
 * IntersectionObserver-driven component reusable anywhere.
 *
 * Renders children immediately (opacity 1) until JS decides to animate,
 * so content is never hidden from users without JS or from crawlers.
 */

const Reveal = ({
  as: Tag = "div",              // Componente renderizado, default es un div
  animation = "fade-in-up",     // Animacion por defecto
  delay = "0ms",                // Retraso de la animacion
  className = "",               // Clases de Tailwind
  children,                     // Contenido
  ...rest                       // Otras props
}) => {



  return (

    <>

    </>
  )
}

export default Reveal