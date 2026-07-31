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

                  <div className="absolute -left-[60px] bottom-[60px] h-[60px] w-[60px] bg-ink" aria-hidden="true" />

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

                <div className="relative3 inline-block">
                  <a href="#contact" className="relative inline-flex h-[150px] w-[150px] items-center justify-center gap-[5px] rounded-full
                    bottom-0 border-2 border-ink font-bold text-ink transition-colors duration-500 hover:border-base hover:text-[#BFF747]"
                  >
                    Contact Us
                    <span
                      className="icon-arrow-up-right font-bold"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>

              <div className="relative ml-0 mt-0 block xl:-ml-[57px] xl:mt-[50px]">
                <p className="capitalize">
                  We believe that the surest measure of success is when our partners with us more than half. It&apos;s more than just the visuals. We&apos;re here to support your growth.
                </p>

                <p className="mb-[71px] mt-[14px] capitalize">
                  Our team of skilled professionals works closely with you to understand your business goals and deliver tailored solutions that drive tangible results.
                </p>

                <h3 className="text-2xl font-normal leading-[34px]">
                  Our Mission
                </h3>

                <p>
                  Conduct thorough market research to the fast target audience behaviours.
                </p>

                <div className="relative mt-[33px] block">
                  <div className="grid grid-cols-2 gap-x-[15px] gap-y-[15px]">
                    <div className="relative mb-[30px] block text-center">
                      <div className="relative z-[1] mx-auto block w-full max-w-[142px]">
                        <img
                          src="/public/assets/images/resources/why-choose-one-mission-img-1.jpg"
                          alt="Why Choose"
                          className="w-full rounded-full"
                        />
                      </div>

                      <div className="relative -mt-[81px] block rounded-[50px] bg-base px-[30px] pb-8 pt-[104px]">
                        <h4 className="font-sans text-base font-bold leading-[26px] text-black">
                          Marketing
                          <br />
                          Strategy
                        </h4>
                      </div>
                    </div>

                    <div className="">

                    </div>
                  </div>
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