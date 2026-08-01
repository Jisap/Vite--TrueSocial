import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SectionTitle from "../common/SectionTitle"
import { testimonials, testimonialImage } from "../../data/testimonials.js"


const StartRating = ({ rating }) => {
  const full = Math.floor(rating);  // Toma la parte entera
  const half = rating % 1 >= 0;     // Decide si hay decimal

  return (
    <div className="relative flex items-center gap-[5px]" aria-label={`Rated ${rating} out of 5 stars`}>
      {
        Array.from({ length: full }).map((_, i) => (
          <span
            key={`full-${i}`}
            className="fas fa-star relative inline-block text-base text-[#ff6633]"
            aria-hidden="true"
          />
        ))
      }
      {half && (
        <span
          className="fas fa-star-half-alt relative inline-block text-base text-[#ff6633]"
          aria-hidden="true" />
      )}

    </div>
  )
}

const Testimonials = () => {
  return (
    <>
      <section className="relative z-[1] block bg-surface py-20 sm:pb-[116px] sm:pt-[120px]" id="testimonials">
        <div className="absolute right-[200px] top-20 -z-10 hidden sm:block" aria-hidden="true">
          <img
            className="w-auto animate-float-bob-y"
            src="/assets/images/shapes/testimonial-one-shape-1.png"
            alt=""
          />
        </div>

        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-12">
            <div className="xl:col-span-7">
              <div className="relative mr-0 block xl:-mr-[30px]">
                <SectionTitle
                  tagline="OUR TESTIMONIALS"
                  align="left"
                  title="Hear Real Stories From Our happy Clients"
                  className="!mb-7"
                />

                <div className="relative block">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    loop
                    speed={2000}
                    autoplay={{ delay: 8000 }}
                    slidesPerView={1}
                    pagination={{
                      el: ".testimonial-pagination",
                      clickable: true,
                      renderBullet: (index, className) => {
                        const active = className.includes("swiper-pagination-bullet-active");
                        return `<span class="${className} mx-1 inline-block h-1 w-[60px] cursor-pointer transition-colors delay-100 duration-200
                        ${active ? "bg-ink" : "bg-[#CED3D7]"}"></span>`
                      }
                    }}
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="relative block">
                          <div className="flex items-center justify-between border-t- border-border pt-[31px]">
                            <div className="relative block">
                              <h3 className="font-sans text-[30px] font-bold leading-[40px]">
                                <a
                                  href="#"
                                  className="text-ink hover:[text-shadow:1px_0_0_rgba(18,18,18,0.8)]"
                                >
                                  {testimonial.name}
                                </a>
                              </h3>

                              <p className="text-sm leding-6">
                                {testimonial.title}
                              </p>
                            </div>

                            <div className="relative inline-block">
                              <span
                                className="icon-quote relative inline-block text-[30px] text-ink"
                                aria-hidden="true"
                              />
                            </div>
                          </div>

                          <p className="mb-[23px] mt-[27px] border-b border-border pb-[21px] capitalize text-ink">
                            &quot;{testimonial.quote}&quot;
                          </p>

                          <div className="flex flex-col items-baseline gap-5 sm:flex-row sm:items-center sm:gap-10">
                            <div className="relative flex items-center gap-[15px] pr-0 sm:relative sm:pr-10 sm:before:absolute sm:before:right-0
                            sm:before-top-[7px] sm:before:block sm:before:h-[44px] sm:before:w-px sm:before:n-ink sm:before:content-['']"
                            >
                              <div className="relative flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink">
                                <span className="fas fa-star relative inline-block text-xl text-white" aria-hidden="true"></span>
                              </div>

                              <div className="relative flex-1 block">
                                <span>Verified By</span>
                                <h3 className="mt-[5px] font-sans text-2xl font-bold uppercase leading-6">
                                  Trustpilot
                                </h3>
                              </div>
                            </div>

                            <StartRating rating={testimonial.rating} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="relative z-[5] mt-[30px] flex flex-row flex-wrap items-center sm:absolute sm:bottom-0 sm:right-0 sm:mt-0">
                    <div className="testimonial-pagination relative inline-flex leading-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-5">
              <div className="relative ml-0 mr-0 block sm:ml-10 sm:mt-10">
                <div className="relative z-[1] block before:absolute before:-right-10 before:-top-10 before:-bottom-0 before:left-0 before:-z-10
                before:-bg-white befor:[clip-path:polygon(0_0,100%_0,100%_50%,100%_100%,44%_100%,43%_35%)] before:content-['']"
                >
                  <img
                    src={testimonialImage.src}
                    alt={testimonialImage.alt}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials