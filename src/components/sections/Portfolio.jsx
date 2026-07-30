import { useState } from "react"
import SectionTitle from "../common/SectionTitle"
import { portfolioLinks } from "../../data/portfolio.js"


const Portfolio = () => {

  const [activeId, setActiveId] = useState(portfolioLinks[0].id)
  const activeItem = portfolioLinks.find((item) => item.id === activeId) ?? portfolioLinks[0]

  return (
    <section
      className="relative z-[1] block bg-surface py-20 sm:pt-[120px] sm:pb-[120px] xl:pb-0"
      id="portfolio"
    >
      <div className="mx-auto w-full max-w-[1320pc] px-[15px]">
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[40px] xl:grid-cols-2">
          <div className="relative mx-auto block mx-w-[600px] xl:mx-0 xl:max-w-none">
            <div className="[&_h2]:xl:-mr-[100px]">
              <SectionTitle
                tagline="PORTFOLIO"
                align="left"
                title="Enhibiting Outstanding Creativity"
                className="!mb-[38px]"
              />
            </div>

            <p className="capitalize">
              Established in 1995, TrueSocial has been leading force in the digital landscape for over two decades. We&apos;re a passionate

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio