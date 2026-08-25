import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/websiteData';
// import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnApproach?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnApproach,
}) => {
  return (
    <section className="w-full bg-[#FAF9F5]">

      {/* ============================================================
          ABOUT / BUILT ON PRECISION
      ============================================================ */}

      <div
        className="
          relative
          box-border
          w-full
          overflow-hidden
          border-b
          border-[#D1C9B7]
          bg-gradient-to-r
          from-[#FAF9F5]
          to-[#F5EFE2]
          px-6
          py-20
          sm:px-8
          lg:px-20
          lg:py-[120px]
          max-sm:bg-none
          max-sm:bg-[#F5EFE2]
          max-sm:px-5
          max-sm:py-14
        "
      >

        {/* ----------------------------------------------------------
            BACKGROUND TEXTURE
        ---------------------------------------------------------- */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[#FFFFFF]
            opacity-[0.12]
          "
        />

        {/* ----------------------------------------------------------
            CONTENT ROW
        ---------------------------------------------------------- */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1280px]
            flex-col
            gap-12
            lg:flex-row
            lg:items-start
            lg:gap-16
            max-sm:gap-8
          "
        >

          {/* ========================================================
              LEFT COLUMN
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="
              flex
              w-full
              max-w-[624px]
              flex-col
              gap-8
              max-sm:max-w-none
            "
          >

            {/* ------------------------------------------------------
                HEADER STACK
            ------------------------------------------------------ */}

            <div
              className="
                flex
                w-full
                flex-col
                gap-4
                max-sm:gap-3
              "
            >

              {/* EYEBROW */}

              <div
                className="
                  flex
                  h-4
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-4
                    shrink-0
                    bg-[#C0913F]
                  "
                />

                <span
                  className="
                    font-['Geist_Mono',monospace]
                    text-[12px]
                    font-semibold
                    uppercase
                    leading-4
                    text-[#C0913F]
                    max-sm:text-[10px]
                    max-sm:leading-[13px]
                  "
                >
                  02 // BUILT ON PRECISION
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                  font-['DM_Serif_Text',serif]
                  text-[40px]
                  font-normal
                  leading-[110%]
                  text-[#0E2620]
                  sm:text-[48px]
                  lg:text-[56px]
                  max-sm:text-[24px]
                  max-sm:leading-[125%]
                "
              >
                Built to carry real weight.
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  max-w-[624px]
                  font-['Geist',sans-serif]
                  text-[16px]
                  font-normal
                  leading-[170%]
                  text-[#14211D]
                  opacity-[0.92]
                  sm:text-[18px]
                  max-sm:max-w-none
                  max-sm:text-[16px]
                  max-sm:leading-[160%]
                  max-sm:opacity-100
                "
              >
                We bring together experienced teams, capable equipment and
                disciplined project execution to support demanding industrial
                sites.
              </p>

            </div>

            {/* ------------------------------------------------------
                SINCE BADGE
                Desktop: stacked (column), 123x106
                Mobile:  side-by-side (row), 169x88
            ------------------------------------------------------ */}

            <div
              className="
                flex
                h-[106px]
                w-[123px]
                flex-col
                justify-between
                rounded-[20px]
                bg-[#0E2620]
                px-5
                py-[18px]
                shadow-[0px_10px_24px_-8px_rgba(0,0,0,0.10)]
                max-sm:h-[88px]
                max-sm:w-[169px]
                max-sm:flex-row
                max-sm:items-center
                max-sm:justify-start
                max-sm:gap-3
                max-sm:rounded-[12px]
                max-sm:py-5
                max-sm:shadow-none
              "
            >

              <span
                className="
                  font-['Geist_Mono',monospace]
                  text-[12px]
                  font-bold
                  uppercase
                  leading-4
                  text-[#C0913F]
                  max-sm:text-[14px]
                  max-sm:font-normal
                  max-sm:leading-[18px]
                "
              >
                SINCE
              </span>

              <span
                className="
                  font-['DM_Serif_Text',serif]
                  text-[44px]
                  font-normal
                  leading-none
                  text-[#FAF9F5]
                  max-sm:text-[40px]
                  max-sm:leading-[120%]
                "
              >
                {COMPANY_INFO.foundedYear || '2018'}
              </span>

            </div>

          </motion.div>


          {/* ========================================================
              RIGHT PULL QUOTE
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="
              box-border
              flex
              min-h-[344px]
              w-full
              max-w-[624px]
              flex-col
              gap-6
              rounded-[16px]
              border
              border-[#C0913F]
              bg-[#F5EFE2]
              p-8
              shadow-[0px_10px_24px_-10px_rgba(192,145,63,0.10),0px_18px_40px_-14px_rgba(0,0,0,0.07)]
              sm:p-12
              max-sm:min-h-0
              max-sm:h-auto
              max-sm:max-w-none
              max-sm:gap-4
              max-sm:rounded-[12px]
              max-sm:border-[#C6A15B]
              max-sm:bg-[#FAF9F5]
              max-sm:p-6
              max-sm:shadow-none
            "
          >

            {/* QUOTE ICON */}

            <div className="h-8 w-8 shrink-0 text-[#C0913F] max-sm:h-6 max-sm:w-6">

              <svg
  width="32"
  height="32"
  viewBox="0 0 32 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="h-full w-full"
>
  <path
    d="M4 5V27M10 6H28M10 16H28M10 26H28"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
  />
</svg>

            </div>


            {/* QUOTE */}

            <blockquote
              className="
                w-full
                font-['DM_Serif_Text',serif]
                text-[22px]
                font-normal
                leading-[135%]
                text-[#0E2620]
                sm:text-[28px]
                max-sm:text-[20px]
                max-sm:leading-[140%]
              "
            >
              {COMPANY_INFO.ourPromise ||
                'Our promise is simple: deliver what we commit to, protect the people who make it possible, and earn trust with every project we complete.'}
            </blockquote>


            {/* ACTION */}

            <div className="mt-auto flex flex-col gap-[6px]">

              <button
                type="button"
                onClick={onLearnApproach}
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  font-['Geist_Mono',monospace]
                  text-[12px]
                  font-bold
                  uppercase
                  leading-4
                  text-[#C0913F]
                  transition-colors
                  duration-200
                  hover:text-[#A0732A]
                  max-sm:text-[10px]
                  max-sm:leading-[13px]
                "
              >
                <span>OUR APPROACH</span>

                {/* <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                /> */}
              </button>

            </div>

          </motion.div>

        </div>
      </div>


      {/* ============================================================
          KINGDOM / VISION 2030 — desktop/tablet (overlay text on video)
          Hidden on mobile; a simpler stacked version renders below.
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="
          relative
          box-border
          flex
          h-[600px]
          w-full
          flex-col
          justify-center
          overflow-hidden
          bg-[#071C16]
          sm:h-[680px]
          lg:h-[800px]
          max-sm:hidden
        "
      >

        {/* ==========================================================
            BACKGROUND IMAGE / VIDEO
        ========================================================== */}

        <div className="absolute inset-0">

          {/*

            IMPORTANT:

            Put your uploaded globe image here:

            /public/images/vision2030.jpg

            Then this path becomes:

            /images/vision2030.jpg

          */}

          {/* <img
            src="/images/vision2030.jpg"
            alt="Kingdom Vision 2030"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          /> */}

          

            {/* If you want the VIDEO instead of the image,
            replace the <img> above with: */}

            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/vision2030.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/videos/vision2030.mp4"
                type="video/mp4"
              />
            </video>

         

        </div>


        {/* ==========================================================
            DARK GREEN GRADIENT OVERLAY
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-gradient-to-r
            from-[rgba(20,33,29,0.88)]
            via-[rgba(20,33,29,0.52)]
            to-[rgba(20,33,29,0)]
          "
        />


        {/* Additional subtle dark overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-black/[0.08]
          "
        />


        {/* ==========================================================
            VISION 2030 CONTENT
        ========================================================== */}

        <div
  className="
    absolute
    bottom-12
    inset-x-0
    mx-auto
    max-w-[1280px]
    z-20
    flex
    w-[calc(100%-48px)]
    flex-col
    items-start
    justify-end
    gap-4
    p-0
    sm:bottom-14
    sm:w-[calc(100%-80px)]
    lg:bottom-20
    lg:w-[calc(100%-160px)]
    lg:gap-4
  "
>

  {/* EYEBROW */}

  <span
    className="
      font-['Geist_Mono',monospace]
      text-[12px]
      font-semibold
      uppercase
      leading-[18px]
      tracking-[0.12em]
      text-[#C6A15B]
      sm:text-[14px]
      lg:text-[14px]
      lg:leading-[18px]
    "
  >
    AL KHOBAR, KINGDOM OF SAUDI ARABIA
  </span>


  {/* HEADLINE */}

  <h3
    className="
      max-w-[720px]
      font-['DM_Serif_Text',serif]
      text-[40px]
      font-normal
      leading-[110%]
      text-[#FAF9F5]
      sm:text-[48px]
      md:text-[56px]
      lg:text-[56px]
      lg:leading-[110%]
      lg:w-[720px]
    "
  >
    Proud to build alongside the
    <br className="hidden sm:block" />
    Kingdom's Vision 2030.
  </h3>

</div>

      </motion.div>

      {/* ============================================================
          KINGDOM / VISION 2030 — mobile only (image, then text below)
      ============================================================ */}

      <div className="hidden max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:bg-[#0E2620] max-sm:pb-12">

        {/* Video / image cover, full width, no side padding */}
        <div className="relative h-[261px] w-full overflow-hidden rounded-[8px] bg-[#071C16]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/vision2030.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/vision2030.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text block below the video, padded */}
        <div className="flex w-full flex-col gap-2 px-5">
          <span
            className="
              font-['Geist_Mono',monospace]
              text-[10px]
              font-normal
              uppercase
              leading-[13px]
              text-[#C6A15B]
            "
          >
            AL KHOBAR, SAUDI ARABIA
          </span>

          <h3
            className="
              w-full
              font-['DM_Serif_Text',serif]
              text-[20px]
              font-normal
              leading-[130%]
              text-[#FAF9F5]
            "
          >
            Proud to build alongside the Kingdom's Vision 2030.
          </h3>
        </div>

      </div>

    </section>
  );
};