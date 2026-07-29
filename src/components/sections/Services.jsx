import React from 'react'

const Services = () => {
  return (
    <section className='relative z-[1] block pb-0 pt-20 md:pt-[120px]' id="services">
      <div className='absolute left-[70px] top-[123px] -z-10 hidden opacity-5 md:blcok' aria-hidden="true">
        <img
          src="/assets/images/shapes/services-one-shape-1.png"
          alt=""
          className='w-auto animate-rotate-me'
        />
      </div>

      <div className='absolute right-[75px] top-[120px] -z-10 hidden md:block' aria-hidden="true">
        <img
          src="/assets/images/shapes/services-one-shape-2.png"
          alt=""
          className='w-auto animate-float-bob-y'
        />
      </div>

      <div className='mx-auto w-full max-w-[1320px]'>
        <div className='relative mb-[60px] block border-b border-border pb-[50px] md:pb-[82px]'>

        </div>
      </div>
    </section>
  )
}

export default Services