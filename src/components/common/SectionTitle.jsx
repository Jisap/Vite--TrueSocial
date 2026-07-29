import Reveal from "./Reveal"

const SectionTitle = ({
  tagline,
  title,
  align = "center",
  variant = "light",
  className = ""
}) => {
  const dotColor = variant === "dark" ? "bg-white" : "bg-ink";
  const taglineColor = variant === "dark" ? "text-white" : "text-muted";
  const titleColor = variant === "dark" ? "text-white" : "text-dark";

  return (
    <div className={`relative z-[1] mb-12 ${align === "left" ? "text-left" : "text-center"} ${className}`}>
      {/* Tagline con el logo de dos círculos */}
      <div className={`flex items-center gap-4 mb-4 ${align === "left" ? "" : "justify-center"}`}>
        <div className={`relative inline-block h-4 w-4 rounded-full after:absolute after:-right-2 after:top-0 after:h-4 after:w-4 after:rounded-full after:border after:border-[#ff6633] after:content-[''] 
          ${dotColor}`}
        >
        </div>
        <span className={`text-base font-bold uppercase leading-tight ${taglineColor}`}>
          {tagline}
        </span>
      </div>

      {/* Título principal */}
      <Reveal
        as="h2"
        animation="fade-in-up"
        className={`text-[32px] font-normal capitalize leading-tight sm:text-[40px] md:text-[46px] xl:text-[54px] xl:leading-[64px] ${titleColor}`}
      >
        {title}
      </Reveal>
    </div>
  )
}

export default SectionTitle