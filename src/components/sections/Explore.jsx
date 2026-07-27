import { useState } from "react";
import CircularText from "../common/CircularText";
import VideoModal from "../common/VideoModal";


const SHOWREEL_URL = "https://www.youtube.com/watch?v=vNj8MQ6991c"

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
            className="relative left-1/2 z-[2] h-[140px] w-[140px] -translate-x-1/2 rounded-full bg-ink sm:h-[180px] sm:w-[180px]"
            onClick={() => setVideoOpen(true)}
            aria-label="Play our showreel video"
            style={{ border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans text-[17px] font-medium uppercase text-white">
              <CircularText
                text=". Explore More . Explore More "
                size={150}
              />
            </span>

            <span className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-base">
              <span className="icon-arrow-up-right relative text-2xl text-ink" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {videoOpen && (
        <VideoModal
          videoUrl={SHOWREEL_URL}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  )
}

export default Explore