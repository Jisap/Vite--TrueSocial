import { footerMenuColumns, footerSocialLinks } from "../../data/footerLinks.js"



const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative z-[1] block">
        <div className="bg-ink py-16 md:py-20 lg:pb-[72px] lg:pt-[61px]">
          <div className="mx-auto w-full max-w-[1320px] px-[15px]">
            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <h2 className="text-[40px] font-light capitalize leading-[1.1] text-white sm:text-[70px] lg:text-[100px]">
                  Let&apos;s Create
                  <br />
                  Something Great
                </h2>

                <p className="">
                  We shift you from today&apos;s reality to tomorrow&apos;s potential, ensuring.
                </p>
              </div>

              <div>
                <a href="#contact" className="flex h-[120px] w-[120px] items-center justify-center gap-[5px] rounded-full bg-base text-base
                font-bold capitalize text-ink transition-colors duration-500 hover:bg-white sm:h-[152px] sm:w-[152px]"
                >
                  Let&apos;s Talk
                  <span className="icon-arrow-up-right relative -top-px text-lg font-bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto w-full max-w-[1320px] px-[15px]">
            <div>
              <nav className="flex flex-col items-center gap-[10px] border-b-2 border-border py-[30px] sm:flex-row sm:justify-between
              sm:gap-[50px] lg:pb-[30px] lg:pt-[73px]" aria-label="footer"
              >
                {footerMenuColumns.map((column, i) => (
                  <ul className="m-0 flex list-none flex-col items-center gap-[10px] p-0 sm:flex-row sm:gap-[50px]" key={i}>
                    {column.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className='font-semibold capitalize text-ink duration-500 transition-colors hover:text-[#bff747]'>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </nav>

              <div className="flex flex-col items-center gap-10 py-[25px] text-center sm:flex-row sm:justify-between sm:pb-[34px] sm:text-left">
                <div className="flex items-center gap-5">
                  {footerSocialLinks.map((social) => (
                    <a
                      href={social.href}
                      key={social.icon}
                      aria-label={social.label}
                      className="text-base text-ink transition-colors duration-500 hover:text-[#bff747]"
                    >
                      <span className={social.icon} aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <p className="capitalize text-ink">
                  Copyright © {year} . {" "}
                  <a href="#home" className="text-ink font-bold transition-colors duration-500 hover:text-[#bff747]">
                    Truesocial Digital . {" "}
                  </a>
                  All rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer