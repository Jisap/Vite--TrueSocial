import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SectionTitle from "../common/SectionTitle"
import { testimonials, testimonialImage } from "../../data/testimonials.js"


const StartRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0;

  return (
    <div className="relative flex flex-col items-center gap-[5px]" aria-label={`Rated ${rating} out of 5 stars`}>
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
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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