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
    <>
      <div className="fixed bottom-[45px] left-[30px] z-[99] inline-block">
        <button
          type="button"
          className="relative z-[1] inline-flex h-[45px] w-[45px] items-center justify-center rounded-[5px] bg-base text-xl text-ink
          before:absolute before:-inset-[5px] before:-z-10 before:rounded-[5px] before:bg-base/20 before:content-['']"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="Open chat"
        >
          <i className="fa fa-comment" aria-hidden="true" />
        </button>
      </div>

      <div
        id="chat-popup"
        className={`
          fixed bottom-0 left-2 z-[99999] w-[calc(100vw-16px)] max-w-[350px] rounded-[10px] rounded-bl-none rounded-tl-none
          bg-ink shadow-[0pc_0px_30px_0px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out sm:left-0
          ${open
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Contact chat"
        aria-hidden={!open}
      >
        <div className="relative block px-[35px] pb-10 pt-8">
          <button
            type="button"
            className="absolute -top-[55px] left-0 flex h-[55px] w-[60px] items-center justify-center rounded-[5px] rounded-bl-none
            rounded-br-none bg-base text-base text-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>

          <div>
            {submitted ? (
              <p className="text-center text-sm leading-5 text-white/70">
                Thanks for reaching out - we&apos;ll get back to you shortly.
              </p>
            ) : (
              <>
                <p className="mb-10 text-center text-sm leading-5 text-white/70">
                  Please fill out the form below and we will get back to you as soon as possible.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="sr-only" html="chat-name">
                      Your Name
                    </label>

                    <input
                      id="chat-name"
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="sr-only" html="chat-email">
                      Your Email
                    </label>

                    <input
                      id="chat-email"
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className="sr-only" html="chat-message">
                      Your Message
                    </label>

                    <textarea
                      id="chat-message"
                      name="message"
                      placeholder="Your Message*"
                      required
                      className={`${inputClasses} h-[120px] resize-none`}
                      rows={4}
                    />
                  </div>

                  <div className="text-center">
                    <ThemeButton
                      as="Button"
                      type="submit"
                      className="w-full"
                    >
                      Submit Now
                      <span className="fas fa-arrow-right" aria-hidden="true"></span>
                    </ThemeButton>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatWidget