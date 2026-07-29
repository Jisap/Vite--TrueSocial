import React from 'react'
import SectionTitle from '../common/SectionTitle'

const Services = () => {
  return (
    <section className='relative z-[1] block pb-0 pt-20 md:pt-[120px]' id="services">
      <div className='absolute left-[70px] top-[123px] -z-10 hidden opacity-5 md:block' aria-hidden="true">
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

      <div className='mx-auto w-full max-w-[1320px] px-[15px]'>
        <div className='relative mb-[60px] block border-b border-border pb-[50px] md:pb-[82px]'>
          <SectionTitle
            tagline="SERVICES"
            title="Empowering Brands Through Strategic Digital Services"
            align="left"
          />

          <p className="relative ml-0 block pl-0 capitalize before:absolute before:-top-5 before:left-0 before:hidden before:h-[123px]
          before:w-px before:bg-border before:content-[''] md:ml-[145px] md:pl-[60px] md:before:block">
            Established in 1995, TrueSocial has been a leading force in the digital landscape for over two decades. We&apos;re a passionate team of designers,
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services