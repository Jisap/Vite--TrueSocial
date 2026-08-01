import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import SectionTitle from "../common/SectionTitle"
import { testimonialsData, testimonialImage } from "../../data/testimonials.js"


const StartRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0;

  return (
    <div className="relative flex flex-col items-center gap-[5px]" aria-label={`Rated ${rating} out of 5 stars`}>
      {
        Array.from({ length: full }).map((_, index) => (
          <span key={index} className="text-[#bff747">
            <i className="fas fa-star" aria-hidden="true"></i>
          </span>
        ))
      }
      {half && (
        <span className="text-[#bff747]">
          <i className="fas fa-star-half-alt" aria-hidden="true"></i>
        </span>
      )}

    </div>
  )
}

const Testimonials = () => {
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default Testimonials