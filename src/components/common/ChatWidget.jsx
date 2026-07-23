import { useEffect, useState } from "react"
import ThemeButton from "./ThemeButton"


const inputClasses = "block w-full rounded-[5px] border border-white/10 px-5 py-[10px] text-[13px] text-white/70 placeholder:text-white/70 transition-all duration-500 focus:outline-none"

/**
 *  Floating "chat" launcher + popup contact form. Behavior ported from script.js click to open, click the close button to close,
 *  Escape to close. submission has no backend in the original template (action="#"), so this just shows a confirmation message client-side
 */


const ChatWidget = () => {

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }


  return (
    <div>ChatWidget</div>
  )
}

export default ChatWidget