import React from 'react'
import Counters from './Counters'
import SectionDivider from '../common/SectionDivider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import { brandLogos } from "../../data/brands";


const ABOUT_TEXT = "Established in 1995, TrueSocial has been a leading force in the digital landscape for over two decades. We're a passionate team of designers"

const About = () => {
  return (
    <section className='relative z-[1] block bg-ink py-[71px] pb-20 sm:py-[109px] sm:pb-[120px]' id="about">
      <div className='absolute right-[120px] top-20 -z-10 hidden sm:block' aria-hidden="true">
        <img
          src="/assets/images/shapes/about-one-shape-1.png"
          alt=""
          className='w-auto'
        />
      </div>

      <div className='mx-auto w-full max-w-[1320px] px-[15px]'>
        <h2 className='mb-[42px] text-[25px] leading-[35px] text-white sm:text-[40px] sm:leading-[50px]'>
          We collaborate with a few disability service providers to create inclusive goods that meet their requirements.
        </h2>

        <div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-4'>
          <div className='xl:col-span-1'>
            <div className='relative mb-[30px] ml-0 mt-0 sm:mb-0 sm:ml-[100px] sm:mt-[27px] xl:ml-[75px] flex justify-center'>
              <Counters
                value={25}
                suffix="+"
                className='font-sans text-[50px] font-bold leading-[50px] text-white'
              />
            </div>

            <p className='text-center font-bold leading-[19px] text-white'>
              Years Of Experience
            </p>
          </div>

          <div className='xl:col-span-3'>
            <div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px] sm:ml-[53px] lg:grid-cols-2'>
              <div className='relative mb-[30px]'>
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

              <div className='relative mb-[30px] ml-0 sm:ml-[47px]'>
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
            </div>
          </div>
        </div>

        {/* <div className='relative block pt-5 sm:pt-[81px] bg-red-500'>
          <div className='relative ml-0 text-center before:absolute before:left-0 before:top-[15px] before:hidden before:h-px before:w-[120px]
        before:bg-[#2A2A2A] before:content-[""] after:absolute after:right-0 after:top-[15px] after:hidden after:h-px after:w-[706px] after:bg-[#2A2A2A]
        after:content-[""] sm:ml-[135px] sm:text-left sm:before:-left-[135px] sm:before:block sm:after:block sm:after:w-full'
          >
            <h3 className='text-2xl capitalize leading-[34px] text-white'>
              We worked with global largest brands
            </h3>
          </div>
        </div> */}
        <SectionDivider
          className='mt-10'
          leftClassName="w-12 md:w-20 "
          rightClassName="flex-1"
        >
          We worked with global largest brands
        </SectionDivider>

        <div className='relative z-[2] block'>
          <div className='relative block pt-[30px] sm:pt-[50px]'>
            <Swiper
              modules={[
                Autoplay,
                Pagination
              ]}
              loop
              speed={2000}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 30 },
                992: { slidesPerView: 4, spaceBetween: 30 },
                1200: { slidesPerView: 5, spaceBetween: 30 },
                1400: { slidesPerView: 5, spaceBetween: 30 },
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