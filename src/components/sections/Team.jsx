import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"
import { teamMembers } from "../../data/team.js"





const Team = () => {
  return (
    <>
      <section className="relative z-[1] block py-20 pb-[50px] sm:py-[120px] sm:pb-[90px]" id="team">
        <div className="mx-auto w-full max-w-[1320px] px-[15px]">
          <SectionTitle
            tagline="TEAM"
            title="Introducing Our Skilled Team"
          />

          <div className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal
                key={member.id}
                animation={member.reveal}
                delay={member.delay}
              >
                <div className="group relative mb-[22px] block">
                  <div className="relative block">
                    <div className="relative block overflow-hidden before:absolute before:inset-0 before:z-[1] before:translate-y-[50px]
                    before:bg-ink/70 before:opacity-0 before:transition-all before:duration-700 before:content-[''] gorup-hover:before:trnaslate-y-0
                    group-hover:before:opacity-100">
                      <img
                        src={member.image}
                        alt={`${member.name} Image`}
                        className="w-full transition-all delay-100 duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute bottom-0 right-0 z-[2] origin-bottom scale-y-0 bg-ink px-3 py-[17px] transition-transform duration-[400ms]
                    ease-linear group-hover:scale-y-100 group-hover:delay-300"
                    >
                      <ul className="m-0 flex list-none flex-col items-center gap-[15px] p-0">
                        {member.social.map((social) => (
                          <li key={social.icon}>
                            <a
                              href={social.href}
                              aria-label={`${member.name} on ${social.label}`}
                              className="relative flex items-center text-base text-white transition-color duration-500 hover:text-[#bff747]"
                            >
                              <span
                                className={social.icon}
                                aria-hidden="true"
                              >
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default Team