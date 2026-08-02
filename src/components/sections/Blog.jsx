import React from 'react'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import { blogPosts } from "../../data/blogPosts.js"



const Blog = () => {
  return (
    <section className='relative z-[1] block py-20 pb-[50px] sm:py-[120px] sm:pb-[90px]' id="blog">
      <div className='absolute bottom-[265px] left-10 -z-10 hidden xl:block' aria-hidden="true">
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
                <a href="#blog" className='relative flex items-center gap-[6px] font-bold text-ink transition-colors duration-500 before:absolute
                 before:bottom-0 before:left-0 before:right-[3px] before:h-px before:bg-ink before:transition-colors before:duration-500 before:content-[""] 
                 hover:before:bg-[#bff747]'
                >
                  View All Articles
                  <span className='icon-arrow-up-right text-lg font-bold' aria-hidden='true'></span>
                </a>
              </div>
            </div>
          </div>

          <div className='xl:col-span-7'>
            <div className='relative mx-auto mt-[50px] block max-w-[600px] xl:mx-0 xl:ml-6 xl:mt-0 xl:max-w-none'>
              <ul className='m-0 flex list-none flex-col gap-[30px] p-0'>
                {blogPosts.map((post) => (
                  <Reveal key={post.id} animation="fade-in-up" delay={post.delay}>
                    <article className='group relative flex flex-col items-baseline gap-[30px] border border-border p-[19px] sm:flex-row sm:items-center'>
                      <div className='relative block w-full max-w-[190px]'>
                        <div className='relative block overflow-hidden before:absolute before:inset-0 before:z-[1] before:opacity-0 before:translate-y-[50px]
                        before:bg-ink/[.69] before:transition-all before:duration-700 before:content-[""] group-hover:before:translate-y-0
                        group-hover:before:opacity-100'
                        >
                          <img
                            src={post.image}
                            alt=""
                            className='w-full transition-transform duration-100 ease-in-out group-hover:scale-105'
                          />
                          <a
                            href="#"
                            className='absolute inset-0 z-[2] flex items-center justify-center text-[#bff747] opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                            aria-label={post.title}
                          >
                            <span className='icon-arrow-up-right text-2xl font-bold' aria-hidden="true" />
                          </a>
                        </div>
                      </div>

                      <div className='relative block flex-1'>
                        <div className='flex items-center gap-5'>
                          <span>{post.category}</span>
                          <span className='block h-[5px] w-[56px] rounded-full bg-ink' aria-hidden="true" />
                          <p>{post.date}</p>
                        </div>

                        <h3 className='mb-2 mt-1 font-sans text-2xl font-bold capitalize leading-[34px]'>
                          <a href="#" className='text-ink transition-colors duration-500 hover:text-[#bff747]'>
                            {post.title}
                          </a>
                        </h3>

                        <p className='mb-[19px] capitalize'>
                          {post.excerpt}
                        </p>

                        <div className='relative inline-block'>
                          <a href="#" className='relative flex items-center gap-[6px] font-bold capitalize text-ink transition-colors duration-500
                          before:absolute before:bottom-0 before:left-0 before:right-[3px] before:h-px before:bg-[#bff747] before:transition-all 
                          before:duration-500 before:content-[""] before:opacity-0 hover:text-[#bff747] hover:before:opacity-100'
                          >
                            Read More
                            <span className='icon-arrow-up-right text-lg font-bold' aria-hidden="true"></span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog