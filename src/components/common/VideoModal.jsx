import { useEffect, useRef } from "react"

/**
 * Minimal accessible lightbox for the YouTube "play video" links.
 * Replaces jquery.magnific-popup (type: "iframe"): closes on Escape or
 * backdrop click, and only mounts the iframe while open so no video
 * loads (or keeps playing) in the background.
 */

const VideoModal = ({ videoUrl, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("locked");
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("locked");
    }
  }, [onClose]);

  const embedUrl = toEmbedUrl(videoUrl);

  if (!embedUrl) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-label="Video player"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 text-3xl text-white transition-opacity hover:opacity-70"
      >
        <i className="fa fa-times" aria-hidden="true" />
      </button>

      <div
        className="aspect-video w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title="Promotional video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

function toEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
  const id = match ? match[1] : "";
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
}

export default VideoModal