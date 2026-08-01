import { useState } from "react"
import SectionTitle from "../common/SectionTitle"
import ThemeButton from "../common/ThemeButton"
import contact from "../../../public/assets/images/backgrounds/contact-one-bg.jpg"




const inputClasses = "relative z-[1] block h-[42px] ps-2 w-full border-0 border-b border-[#2a2a2a] bg-transparent text-sm font-normal leading-[42px] text-muted outline-none placeholder:text-muted"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative z-[1] block pb-20 sm:pb-[120px]"
    >
      {/* Imagen de fondo */}
      <div
        className="
          absolute bottom-0 left-0 top-0 -z-10
          w-full bg-cover bg-left bg-no-repeat
          xl:w-[calc((100%+30px)/2)]
        "
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/contact-one-bg.jpg)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-[15px]">
        <div className="grid grid-cols-1 xl:grid-cols-12">

          {/* Espacio reservado para la imagen */}
          <div className="hidden xl:block xl:col-span-4" />

          {/* PANEL OSCURO */}
          <div
            className="
              relative z-[1] col-span-1 block
              bg-ink
              px-5 pb-[72px] pt-20

              before:absolute
              before:inset-y-0
              before:left-0
              before:-right-[10000px]
              before:-z-10
              before:bg-ink
              before:content-['']

              sm:px-[30px]
              sm:pb-[112px]
              sm:pt-[120px]

              xl:col-span-8
              xl:ml-[14px]
              xl:pb-[112px]
              xl:pl-[80px]
              xl:pr-0
              xl:pt-[120px]
            "
          >

            <SectionTitle
              tagline="CONTACT US"
              align="left"
              variant="dark"
              title="We'd Love To Hear From You"
              className="!mb-[41px] [&_h2]:xl:-mr-[150px]"
            />

            {submitted ? (
              <p
                className="mb-[6px] mt-6 text-sm leading-6 text-white"
                role="status"
              >
                Thanks for reaching out - We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form
                className="relative block"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-x-[30px] gap-y-0 md:grid-cols-2">

                  {/* First name */}
                  <div>
                    <h4 className="mb-[5px] text-xl font-normal leading-[30px] text-white">
                      First name{" "}
                      <span
                        aria-hidden="true"
                        className="text-[#bff747]"
                      >
                        *
                      </span>
                    </h4>

                    <div className="relative mb-[23px] block transition-all duration-500">
                      <label
                        className="sr-only"
                        htmlFor="contact-first-name"
                      >
                        First Name
                      </label>

                      <input
                        id="contact-first-name"
                        type="text"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Last name */}
                  <div>
                    <h4 className="mb-[5px] text-xl font-normal leading-[30px] text-white">
                      Last name{" "}
                      <span
                        aria-hidden="true"
                        className="text-[#bff747]"
                      >
                        *
                      </span>
                    </h4>

                    <div className="relative mb-[23px] block transition-all duration-500">
                      <label
                        className="sr-only"
                        htmlFor="contact-last-name"
                      >
                        Last Name
                      </label>

                      <input
                        id="contact-last-name"
                        type="text"
                        name="lastName"
                        placeholder="Enter Your Last Name"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <h4 className="mb-[5px] text-xl font-normal leading-[30px] text-white">
                      Email{" "}
                      <span
                        aria-hidden="true"
                        className="text-[#bff747]"
                      >
                        *
                      </span>
                    </h4>

                    <div className="relative mb-[23px] block transition-all duration-500">
                      <label
                        className="sr-only"
                        htmlFor="contact-email"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <h4 className="mb-[5px] text-xl font-normal leading-[30px] text-white">
                      Phone Number{" "}
                      <span
                        aria-hidden="true"
                        className="text-[#bff747]"
                      >
                        *
                      </span>
                    </h4>

                    <div className="relative mb-[23px] block transition-all duration-500">
                      <label
                        className="sr-only"
                        htmlFor="contact-phone"
                      >
                        Phone Number
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <h4 className="mb-[5px] text-xl font-normal leading-[30px] text-white">
                      Message{" "}
                      <span
                        aria-hidden="true"
                        className="text-[#bff747]"
                      >
                        *
                      </span>
                    </h4>

                    <div className="relative mb-[23px] block transition-all duration-500">
                      <label
                        className="sr-only"
                        htmlFor="contact-message"
                      >
                        Message
                      </label>

                      <input
                        id="contact-message"
                        type="text"
                        name="message"
                        placeholder="Enter Your Message"
                        required
                        className={`${inputClasses} !h-[150px] pt-[10px]`}
                      />
                    </div>
                  </div>
                </div>

                <ThemeButton
                  as="button"
                  type="submit"
                >
                  Send a Message
                  <span className="icon-arrow-up-right" aria-hidden="true"></span>
                </ThemeButton>
              </form>
            )}

            <p className="mb-[6px] mt-6 text-sm capitalize leading-6 text-white">
              Didn&apos;t find what you were trying yo find? Write to us at.
            </p>

            <p className="text-base font-semibold leading-[26px]">
              <a href="mailto:Info@TrueSocial.com" className="text-white transition-colors duration-500 hover:text-[#bff747]">
                Info@TrueSocial.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact