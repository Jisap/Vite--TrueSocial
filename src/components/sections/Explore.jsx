import { useState } from "react";


const SHOWREEL_URL = "https://www.youtube.com/"

const Explore = () => {

  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative z-[1] block py-[200px] sm:py-[280px] lg:py-[373px]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/explore-one-bg.jpg)"
        }}
      >
        <div className="absolute left-1/2 top-[2px] z-[1] -translate-x-1/2 sm:left-auto sm:right-[80px] sm:translate-x-0 md:right-[220px]">
          <button
            type="button"
            className="relative left-1/2 z-[2] h-[140px] w-[140px] -translate-x-1/2 rounded-full bg-ink sm:h-[140px] sm:w-[180px]"
            onClick={() => setVideoOpen(true)}
            aria-label="Play our showreel video"
            style={{ border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans text-[17px] font-medium uppercase text-wrap">


            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Explore