import React from 'react'
import Counters from './Counters'

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
            <div className='relative mb-[30px] ml-0 mt-0 sm:mb-0 sm:ml-[100px] sm:mt-[27px] xl:ml-[75px]'>
              <Counters
                value={25}
                suffix="+"
                className='font-sans text-[50px] font-bold leading-[50px] text-white'
              />
            </div>

            <p className='font-bold leading-[19px] text-white'>
              Years Of Experience
            </p>
          </div>

          <div className='xl:col-span-3'>
            <div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px] sm:ml-[53px] lg:grid-cols-2'>
              <div className='relative mb-[30px]'>
                <p className='mb-[27px] capitalize text-[#F5F5F4]'>
                  {ABOUT_TEXT}
                </p>

                <div></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About