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
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
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

            <ul className="m-0 mt-[42px] list-none space-y-[10px] p-0 sm:space-y-[40px]">
              {portfolioLinks.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id} className="group relative block">
                    <div className="relative">
                      {/* linea que se expande */}
                      <div className={`
                        absolute left-0 top-[19px] h-px w-[58px] origin-left bg-ink transition-transform delay-100 duration-500 ease-in-out group-hover:scale-x-100
                        ${isActive ? "scale-x-100" : "scale-x-0"}`}
                        aria-hidden="true"
                      />

                      {/*Titulos*/}
                      <h4 className="font-sans text-base font-bold leading-[26px] sm:text-[30px] sm:leading-[40px]">
                        <button
                          type="button"
                          onClick={() => setActiveId(item.id)}
                          aria-pressed={isActive}
                          className={`
                            block w-full border-none bg-transparent p-0 text-left transition-[color,padding-left] duration-300 ease-in-out hover:pl-[70px] hover:text-ink
                            ${isActive ? "pl-[70px] text-ink" : "text-muted"}  
                          `}
                        >
                          {item.title}
                        </button>
                      </h4>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="relative">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio