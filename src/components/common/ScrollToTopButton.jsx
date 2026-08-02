import useScrollState from "../../hooks/useScrollState"




const ScrollToTopButton = () => {

  const { showScrollTop } = useScrollState();
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <a
        href="#home"
        onClick={handleClick}
        className={`
          fixed right-0 z-[99] flex h-[35px] w-auto -rotate-90 cursor-pointer items-center text-center transition-all duration-200 ease-in hover:text-base 
          ${showScrollTop
            ? "visible bottom-[70px] opacity-100"
            : "invisible bottom-[60px] opacity-0"
          }`
        }
      >
        <span className="relative inline-block h-1 w-[30px] overflow-hidden bg-base">
          <span className="absolute inset-0 bg-ink"></span>
        </span>

        <span className="ml-[10px] inline text-xs font-bold uppercase tracking-[0.1em]">
          Go Back Top
        </span>
      </a>
    </>
  )
}

export default ScrollToTopButton