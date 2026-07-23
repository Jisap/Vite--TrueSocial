

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
        </div>
      </div>
    </section>
  )
}

export default Hero