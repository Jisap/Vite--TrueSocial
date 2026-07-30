import Counter from "../common/Counter"
import Reveal from "../common/Reveal"
import { counters } from "../../data/counters"



const Counters = () => {
  return (
    <section className='relative z-[1] block py-[50px] sm:py-[90px]'>
      <div className='mx-auto w-full mnax-w-[1320px] px-[15px]'>
        <ul className='m-0 flex list-one flex-col items-center gap-y-[30px] p-0 sm:-mx-[15px] sm:flex-row sm:flex-wrap sm:flex-justify-center sm:gap-x-0 xl:mx-0 xl:flex-nowrap'>
          {counters.map((stat) => (
            <li
              key={stat.id}
              className="relative w-full max-w-[370px] sm:w-1/2 sm:max-w-none sm:px-[15px] xl:max-w-[370px] xl:px-0 xl:[&:not(:first-child)]:-ml-[65px]"
            >
              <Reveal
                animation={stat.reveal}
                delay={stat.delay}
              >
                <div className="relative mb-[30px] block rounded-full border border-border py-[70px] pb-[75px] text-center sm:py-[111px] sm:pb-[105.32px]">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-sans text-[64px] font-medium leading-[64px] text-ink"
                  />
                </div>

                <p className="font-serif text-[30px] leading-[40px]">
                  {stat.label.split("/n").map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Counters