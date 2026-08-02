import React from 'react'
import SectionTitle from '../common/SectionTitle'

const Blog = () => {
  return (
    <section className='relative z-[1] block py-20 pb-[50px] sm:py-[120px] sm:pb-[90px]' id="blog">
      <div className='absolute bottom-[256px] left-10 -z-10 hidden xl:block' aria-hidden="true">
        <img
          src="/assets/images/shapes/blog-one-shape-1.png"
          alt=""
          className="w-auto animate-float-bob-y"
        />
      </div>

      <div className='mx-auto w-full max-w-[1320px] px-[15px]'>
        <div className='grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-12'>
          <div className='xl:col-span-5'>
            <div className='relative mx-auto block max-w-[600px] xl:mx-0 xl:max-w-none'>
              <SectionTitle
                tagline="NEWS & BLOG"
                align="left"
                title="Read Our Articles And News"
                className='!mb-5 xl:!mb-[101px]'
              />

              <div className='relative inline-block'>
                <a href="#blog" className='relative'></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog