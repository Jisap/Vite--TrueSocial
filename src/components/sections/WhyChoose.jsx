import SectionTitle from "../common/SectionTitle"


const WhyChoose = () => {
  return (
    <>
      <section className="relative z-[1] block bg-surface py-20 pb-[50px] sm:py-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-12">
            <div className="xl:col-span-6">
              <div className="relative mx-auto mb-[60px] block max-w-[600px] xl:mb-0 xl:mr-[70px] xl:max-w-none">
                <div className="[&_h2]:xl:-mr-[100px]">
                  <SectionTitle
                    tagline="What Sets Us Apart"
                    align="left"
                    title="Driving Digital Success With Strategy Design"
                  />
                </div>

                <p className="capitalize">
                  We believe that the surest measure of success is when our partners with us more than half. It&apos;s more than just the visuals.
                </p>

                <div className="relative ml-0 mt-[45px] block xl:-ml-[60px] xl:mt-[52px]">
                  <img
                    src="/public/assets/images/resources/why-choose-one-img-1.jpg"
                    alt="Why Choose"
                    className="w-full"
                  />

                  <div className="absolute -left-[60px] bottom-[60px] h-[60px] w-[60px] bg-ink" aria-hidden="true">
                    <div className="absolute bottom-0 left-0 h-[60px] w-[60px] bg-base" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] sm:grid-cols-2 xl:col-span-6 xl:grid-cols-2">
                <div className="relative ml-0 mr-0 block xl:-ml-10 xl:mr-[57px]">
                  <div className="relative block">
                    <img
                      src="/public/assets/images/resources/why-choose-one-img-2.jpg"
                      alt="Why Choose"
                      className="w-full"
                    />
                  </div>

                  <p className="my-[23px] mb-8">
                    Conduct thorough market research to the fast target audience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChoose