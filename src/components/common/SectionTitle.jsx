import Reveal from "./Reveal"


/**
 * The "eyebrow tagline + big heading" pattern repeated at the top of
 * every major section in the original template. Consolidating it here
 * removes ~9 copies of identical markup.
 */

const SectionTitle = ({
  tagline,
  title,
  align = "center", // center | left
  variant = "light", // light | dark
  className = ""
}) => {

  const dotColor = variant === "dark" ? "bg-white" : "bg-ink";
  const taglineColor = variant === "dark" ? "text-white" : "text-muted";
  const titleColor = variant === "dark" ? "text-white" : "text-dark";

  return (
    <div className={`relative z-[1] -mt-[2px] mb-12
      ${align === "left" ? "text-left" : "text-center"}
      ${className}
    `.trim()}
    >
      <div className={`relative inline-flex items-center gap-6 
        ${align === "left" ? "" : "justify-center"}`}
      >
        <div className={`relative inline-block h-4 w-4 rounded-full after:absolute after:-right-1 after:top-0 after:h-4 after:w-4 after:rounded-full after:border after:border-[#ff6633] after:content-['']
          ${dotColor}
          `}
        >
          <span className={`relative inline-block text-base font-bold uppercase leading-tight
            ${taglineColor}
          `}
          >
            {tagline}
          </span>
        </div>

        <Reveal
          as="h2"
          animation="fade-in-up"
          className={`mt-2 text-[32px] font-normal capitalize leading-tight sm:text-[40px] md:text-[46px] xl:text-[54px] xl:leading-[64px]
            ${titleColor}
          `}
        >

        </Reveal>
      </div>
    </div>
  )
}

export default SectionTitle