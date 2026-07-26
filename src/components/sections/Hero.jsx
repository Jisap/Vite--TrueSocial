import Reveal from "../common/Reveal"


const Hero = () => {
  return (
    <section className="relative z-[1] block overflow-hidden pb-[120px] pt-[70px] sm:pt-[110px]" id="home">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-multiply"
        style={{
          backgroundImage: "url(/assets/images/shapes/banner-one-shape-bg.png)"
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 top-[150px] -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/shapes/banner-on-shape-1.png"
        }}
        aria-hidden="true"
      />

      <div className="absolute -left-[791px] top-0 -z-10 h-[875px] w-[1010px] rounded-full bg-base/25 blur-[600px]
      [transform:matrix)(0.87,-0.5,0.54,0.84,0,0]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="relative block">
          <div>
            <p className="text-ink">
              Great desing services <br />
              without the pretentiousnes.!
            </p>
          </div>

          <Reveal
            as="div"
            animation="fade-in-up"
            className="relative mb-5 block"
          >
            <h2 className="text-[80px] font-normal leading-none sm:text-[85px] md:text-[130px] lg:text-[170px] xl:text-[220px]">
              Digital
            </h2>
          </Reveal>

          <Reveal
            as="div"
            animation="fade-in-right"
            delay="300ms"
            className="relative flex flex-wrap items-center gap-5 sm:flex-nowrap md:gap-[70px]"
          >
            <ul className="relative flex shrink-0 flex-wrap items-center">
              <li>
                <div className="rounded-[50px] bg-base px-10 py-[30px] pr-[30px] sm:pr-[108px]">
                  <p className="text-[28px] font-bold uppercase leading-[38px] text-ink sm:text-[30px] sm:leading-[40px]">
                    WEB <br className="hidden sm:inline" />
                    DESIGN
                  </p>
                </div>
              </li>

              <li className="-ml-[50px] hidden sm:block">
                <div className="flex h-[140px] w-[140px] items-center justify-center rounded-[50px] bg-ink">
                  <img
                    src="/assets/images/icon/banner-one-icon-man.png"
                    alt=""
                    className="w-auto"
                  />
                </div>
              </li>
            </ul>

            <h2 className="w-full text-right text-[clamp(40px,11vw,150px)] font-normal leading-none sm:w-auto sm:flex-1 sm:min-w-0 sm:text-left">
              SOLUTION
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Hero