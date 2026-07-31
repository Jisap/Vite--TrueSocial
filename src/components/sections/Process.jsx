import SectionTitle from "../common/SectionTitle"
import { processSteps } from "../../data/process.js"



const Process = () => {
  return (
    <>
      <section className="relative z-[1] block py-20 pb-10 sm:pb-[90px] sm:mt-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
          <SectionTitle
            tagline="Workflow"
            title="How We Work"
          />

          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.id} className="gorup relative mx-auto mb-[22px] block max-w-[410px] sm:mx-0 sm:max-w-none">
                <div className="relative flex items-center justify-between">
                  <div className="relative z-[1] flex h-[95px] w-[95px] items-center justify-center rounded-full border border-ink bg-white">
                    <img
                      src={step.icon}
                      alt=""
                      className="w-auto transition-all duration-500 group-hover:animate-wobble"
                    />
                  </div>

                  <div className="relative block" aria-hidden="false">
                    <span className="relative block text-[36px] font-bold leading-[36px] text-border">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="absolute left-[81px] top-[48%] -z-10 hidden -translate-y-1/2 sm:block" aria-hidden="true">
                    <img
                      src="/assets/images/shapes/process-one-single-shape-1.png"
                      alt=""
                      className="w-auto"
                    />
                  </div>
                </div>

                <h3 className="mb-[15px mt-8 text-2xl font-normal leading-[34px]">
                  {step.title}
                </h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Process