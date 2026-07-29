import React from 'react'

import Counter from '../common/Counter'
import SectionDivider from '../common/SectionDivider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import { brandLogos } from "../../data/brands";


const ABOUT_TEXT = "Established in 1995, TrueSocial has been a leading force in the digital landscape for over two decades. We're a passionate team of designers"
const ABOUT_TEXT2 = "Our in-house creative team excels at crafting brand identities, high-converting web experiences, compelling video narratives, and strategic campaign management. "

const About = () => {
  return (
    <section className='relative z-[1] block bg-ink py-[71px] pb-20 sm:py-[109px] sm:pb-[120px]' id="about">
      <div className='absolute right-11 top-16 -z-10 hidden xl:block opacity-40 2xl:opacity-100 pointer-events-none' aria-hidden="true">
        <img
          src="/assets/images/shapes/about-one-shape-1.png"
          alt=""
          className='w-auto max-w-[150px] 2xl:max-w-none'
        />
      </div>

      <div className='mx-auto w-full max-w-[1320px] px-[15px]'>
        <h2 className='mb-[42px] text-[25px] leading-[35px] text-white sm:text-[40px] sm:leading-[50px]'>
          We collaborate with a few disability service providers to create inclusive goods that meet their requirements.
        </h2>

        <div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px] lg:grid-cols-4'>
          <div className='lg:col-span-1 text-center lg:text-left'>
            <div className='relative mb-2 mt-0 flex justify-center lg:justify-start'>
              <Counter
                value={25}
                suffix="+"
                className='font-sans text-[40px] sm:text-[50px] font-bold leading-[50px] text-white'
              />
            </div>

            <p className='font-bold leading-[19px] text-white'>
              Years Of Experience
            </p>
          </div>

          <div className='lg:col-span-3'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div className='relative mb-[15px] sm:mb-0'>
                <p className='mb-[27px] capitalize text-[#F5F5F4]'>
                  {ABOUT_TEXT}
                </p>

                <div className='relative inline-block'>
                  <a href="#services" className='relative flex items-center gap-[3px] font-medium text-[#F5F5F4]
                  transition-colors duration-500 before:absolute before:bottom-[2px] before:left-0 before:right-0 before:h-px
                  before:bg-[#F5F5F4] before:transition-colors before:duration-500 before:content-[""] hover:text-[#BFF747]
                  hover:before:bg-[#CFF747]'
                  >
                    More About Us
                    <span className='icon-arrow-up-right' aria-hidden="true"></span>
                  </a>
                </div>
              </div>

              <div className='relative'>
                <p className='mb-[27px] capitalize text-[#F5F5F4]'>
                  {ABOUT_TEXT2}
                </p>

                <div className='relative inline-block'>
                  <a href="#services" className='relative flex items-center gap-[3px] font-medium text-[#F5F5F4]
                  transition-colors duration-500 before:absolute before:bottom-[2px] before:left-0 before:right-0 before:h-px
                  before:bg-[#F5F5F4] before:transition-colors before:duration-500 before:content-[""] hover:text-[#BFF747]
                  hover:before:bg-[#CFF747]'
                  >
                    More About Us
                    <span className='icon-arrow-up-right' aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider
          className='mt-10 md:mt-16'
          leftClassName="w-12 md:w-20 "
          rightClassName="flex-1"
        >
          We worked with global largest brands
        </SectionDivider>

        <div className='relative z-[2] block'>
          <div className='relative block pt-8 sm:pt-12'>
            <Swiper
              modules={[
                Autoplay,
                Pagination
              ]}
              loop
              speed={2000}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 25 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}
              a11y={{ enabled: true }}
            >
              {brandLogos.map((b) => (
                <SwiperSlide key={b.id}>
                  <div className='relative block'>
                    <div className='relative z-[1] flex items-center justify-center'>
                      <img src={b.src} alt={b.alt} className='w-auto' />
                    </div>
                  </div>
                </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About