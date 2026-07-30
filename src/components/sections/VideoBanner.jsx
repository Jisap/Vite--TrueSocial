import React, { useState } from 'react'
import VideoModal from '../common/VideoModal';


const VIDEO_URL = "https://www.youtube.com/watch?v=b5n8PftC1BU"

const VideoBanner = () => {

  const [open, setOpen] = useState(false);

  return (
    <section className='relative z-[1] block overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url(/assets/images/backgrounds/video-one-bg.jpg)"
        }}
        aria-hidden="true"
      />

      <div className='mx-auto w-full max-w-[1320px] px-[15px]'>
        <div className='relative block py-[100px] text-center sm:py-[270px]'>
          <div className='relative block'>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play video"
              className='relative z-[1] mx-auto flex h-[140px] items-center justify-center rounded-full bg-white text-base font-bold uppercase text-ink transition-colors duration-500 hover:bg-base sm:h-[185px] sm:w-[185px]'
            >
              <span
                className='absolute inset-0 -z-10 rounded-full bg-white/60 animate-ping'
                style={{ animationDelay: "0.6s", animationDuration: "3s" }}
                aria-hidden="true"
              />
              <span
                className='absolute inset-0 -z-10 rounded-full bg-white/60 animate-ping'
                style={{ animationDelay: "0.9s", animationDuration: "3s" }}
                aria-hidden="true"
              />

              <span>Play video</span>
            </button>
          </div>
        </div>
      </div>

      {open && <VideoModal videoUrl={VIDEO_URL} onClose={() => setOpen(false)} />}
    </section>
  )
}

export default VideoBanner