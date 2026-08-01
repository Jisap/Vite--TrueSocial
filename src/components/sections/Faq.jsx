import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import { faqs } from "../../data/faqs.js"

const Faq = () => {

  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <>
      <section className='relative z-[1] block py-20 sm:py-[120px]'>
        <div className='mx-auto w-full max-w-[1320px] py-[15px]'>
          <SectionTitle
            tagline="FAQ"
            title="Frequency & Questions"
          />

          <div className='relative block border-t border-border pt-[52px]'>
            <div className='space-y-[22px]'>
              {faqs.map((faq) => {
                const isOpen = openId === faq.id; // Determina si el acordeón está abierto o cerrado
                return (
                  <div
                    key={faq.id}
                    className='relative block border-b border-border'
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)} // Cambia el estado del id de cada pregunta para abrir o cerrar el acordeón
                      aria-expanded={isOpen}
                      aria-controls={`${faq.id}-panel`}
                      className='mb-[14px] block w-full cursor-pointer border-none bg-transparent pb-[6px] text-left transition-all delay-100 duration-200'
                    >
                      <h4 className='relative m-0 flex items-center justify-between gap-4 font-sans text-2xl font-bold capitalize leading-[34px] text-ink transition-all duration-500'>
                        {faq.question}
                        <span
                          className={`
                            fa fa-plus
                            text-[17px] text-ink
                            transition-transform duration-300 ease-in-out
                            ${isOpen ? "rotate-45" : "rotate-0"}
                          `}
                          aria-hidden="true"
                        ></span>
                      </h4>
                    </button>

                    <div
                      id={`${faq.id}-panel`}
                      role="region"
                      aria-hidden={!isOpen}
                      className={`
                        relative -mt-1.5 grid pr-[10px] transition-[grid-template-rows] duration-[350ms] ease-linear 
                        ${isOpen
                          ? "[grid-template-rows:1fr]"
                          : "[grid-template-rows:0fr]"}
                      `}
                    >
                      <div className='min-h-0 overflow-hidden'>
                        <p className='m-0 pb-[21px] capitalize'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq