import Reveal from "../common/Reveal"
import SectionTitle from "../common/SectionTitle"
import TeamMembers, { teamMembers } from "../../data/team.js"





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
                    <div>

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