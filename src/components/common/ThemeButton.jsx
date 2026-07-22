/**
 * The lime pill button repeated across the site ("Get A Quote", "Let's
 * Talk", form submits, etc). Renders as an <a> or a <button> and reproduces
 * the original theme's two-layer clip-path "circle reveal" hover effect
 * with Tailwind's before/after + arbitrary-value utilities instead of
 * hand-written CSS.
 *
 * variant="default": lime background, white circle reveals on hover.
 * variant="dark": used only for the CTA sitting in the header, where the
 * reveal is ink-colored and the label turns white once revealed.
 */

const ThemeButton = ({ as = "a", variant = "default", className = "", children, ...rest }) => {
    // PROPS: 
    // variant = "default": Controla los colores.
    // Acepta "default" (fondo base, círculo blanco) o "dark" (para el header, círculo color tinta, texto blanco).

    // ...rest: Pasa cualquier otra prop (como href, onClick, type) directamente a la etiqueta HTML subyacente.

    // as = "a": Hace que el componente sea polimórfico. Por defecto renderiza una etiqueta <a> (enlace),
    // pero puedes pasarle as="button" para que sea un botón de formulario.
    const Tag = as;

    // La variable reveal inyecta las clases de color dependiendo de la variante:
    const reveal = variant === "dark"
        ? "before:bg-ink after:bg-ink/30 hover:text-white"
        : "before:bg-white after:bg-white/30"

    return (
        <Tag
            // El efecto principal es que, al hacer hover, un círculo de color crece desde el centro del botón hasta cubrirlo por completo.
            // Para lograr esto con dos capas de profundidad, usa dos pseudo-elementos:
            // before: y after:: Se usan para crear las dos capas del efecto.
            // Ambas se posicionan absolutamente (absolute inset-0) para cubrir todo el botón.
            // Se envían al fondo con before:-z-10 y after:-z-10 para que el texto (children) quede por encima.
            // clip-path: Es la magia real.
            // Estado inicial: [clip-path:circle(0%_at_50%_50%)]. Crea un círculo con radio 0% en el centro (50%, 50%). Básicamente, es invisible.
            // Estado hover: hover:[clip-path:circle(100%_at_50%_50%)]. Expande el círculo al 100% del tamaño del botón.
            className={`
        relative z-[1] inline-flex items-center justify-center gap-[5px] overflow-hidden bg-base px-10 pb-[14px] pt-4 text-center 
        text-base font-bold capitalize text-ink transition-colors duration-500
        before:absolute before:inset-0 before:-z-10 before:[clip-path:circle(0%_at_50%_50%)] before:transition-[clip-path] before:duration-[800ms] 
        before:ease-[cubic-bezier(0,0.96,0.58,1.1)] after:absolute after:inset-0 after:-z-10 after:[clip-path:circle(0%_at_50%_50%)] 
        after:transition-[clip-path] after:duration-[800ms] after:ease-[cubic-bezier(0,0.96,0.58,1.1)] hover:before:[clip-path:circle(100%_at_50%_50%)] hover:before:duration-[4000ms] 
        hover:before:delay-200 hover:after:[clip-path:circle(100%_at_50%_50%)] hover:after:duration-[4000ms]
        ${reveal} ${className}
        `.trim()}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default ThemeButton