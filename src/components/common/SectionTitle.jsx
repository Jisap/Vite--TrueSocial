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
    <div className="">

    </div>
  )
}

export default SectionTitle