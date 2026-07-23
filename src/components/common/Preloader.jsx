import { useEffect, useState } from "react"

/**
 * Brief branded loadign screen shown on first paint. Mirrors the original theme's timing ($('.js-preloader).delay(200).fadeOut(300))
 * visible for 200ms, then fades out over 300ms and unmounts
 */


const Preloader = () => {

  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [])

  if (!visible) return null

  return (
    <div className={`
      fixed inset-0 z-[20000] flex items-center justify-center gap-[10px] overflow-x-hidden bg-white transition-opacity duration-300
      ${fading ? "opacity-0" : "opacity-100"}
      `}
      role="status"
      aria-live="polite"
      aria-label="Loading TrueSocial"
    >
      <div className="h-4 w-5 rounded-full bg-base animate-bouncing" />
      <div className="h-5 w-5 rounded-full bg-base/70 animate animate-bouncing [animation-delay:0.2s]" />
      <div className="h-6 w-6 rounded-full bg-base/50 animate animate-bouncing [animation-delay:0.4s]" />
    </div>
  )
}

export default Preloader