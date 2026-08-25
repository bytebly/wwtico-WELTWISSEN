import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  ShieldCheck,
  Wallet,
  Layers,
} from "lucide-react";

export const WhyWeltwissenSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0E2620]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Main gradient */}
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Main gradient (Desktop/Tablet) & Solid Color Fallback (Mobile) */}
      <div className="absolute inset-0 -z-20 bg-[#0E2620] sm:bg-gradient-to-r sm:from-[#0E2620] sm:via-[#123329] sm:to-[#1B4536]" />

      {/* Left decorative circle (Hidden on Mobile) */}
      <div
        className="
          hidden
          sm:block
          absolute
          -left-[120px]
          top-[160px]
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C0913F]/10
        "
      />

      {/* Right decorative circle (Hidden on Mobile) */}
      <div
        className="
          hidden
          sm:block
          absolute
          -right-[140px]
          -bottom-[180px]
          -z-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#F5EFE2]/10
        "
      />

      {/* =========================================================
          CONTENT WRAPPER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          gap-16
          px-6
          py-20
          sm:px-10
          lg:px-20
          lg:py-[120px]
          max-sm:gap-8
          max-sm:px-5
          max-sm:py-14
        "
      >
        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-col items-start gap-4 max-sm:gap-3"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="h-px w-4 bg-[#C0913F]" />

            <span
              className="
                font-['Geist_Mono',monospace]
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#E3C48A]
                max-sm:text-[10px]
                max-sm:leading-[13px]
                max-sm:tracking-normal
              "
            >
              05 // WHY WELTWISSEN
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-['DM_Serif_Text',serif]
              w-full
              text-[36px]
              font-normal
              leading-[115%]
              text-white
              sm:text-[40px]
              lg:text-[44px]
              max-sm:text-[24px]
              max-sm:leading-[125%]
            "
          >
            Why clients stay.
          </h2>

          {/* Description */}
          <p
            className="
              font-['Geist',sans-serif]
              w-full
              text-[15px]
              font-normal
              leading-[160%]
              text-[#F5EFE2]/90
              sm:text-[16px]
              max-sm:text-[14px]
              max-sm:leading-[150%]
            "
          >
            What sets WELTWISSEN apart across every project.
          </p>
        </motion.div>

        {/* =======================================================
            BENEFITS LAYOUT
        ======================================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-6
            lg:flex-row
            lg:items-center
            max-sm:gap-4
          "
        >
          {/* =====================================================
              FEATURED CARD — hidden on mobile, unchanged elsewhere
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              box-border
              flex
              w-full
              flex-col
              items-start
              overflow-hidden
              rounded-2xl
              border
              border-[#C0913F]/20
              bg-gradient-to-r
              from-[#123329]
              to-[#0E2620]
              p-8
              shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.25)]
              lg:h-[289px]
              lg:flex-[560_560_0%]
              lg:min-w-0
              max-sm:hidden
            "
          >
            {/* Decorative accent */}
            <div
              className="
                absolute
                -right-7
                -top-7
                h-[180px]
                w-[180px]
                rounded-full
                bg-[#C0913F]/10
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                z-10
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#C0913F]
                shadow-[0px_10px_18px_-8px_rgba(0,0,0,0.2)]
              "
            >
              <Handshake
                size={26}
                strokeWidth={2}
                className="text-[#0E2620]"
              />
            </div>

            {/* Text */}
            <div className="relative z-10 mt-5 flex w-full flex-col gap-3">
              <h3
                className="
                  font-['DM_Serif_Text',serif]
                  text-[28px]
                  font-normal
                  leading-[110%]
                  text-white
                  sm:text-[30px]
                  lg:text-[34px]
                "
              >
                Built Around Your Project
              </h3>

              <p
                className="
                  font-['Geist',sans-serif]
                  max-w-[496px]
                  text-[14px]
                  font-normal
                  leading-[160%]
                  text-[#F5EFE2]/92
                  sm:text-[15px]
                "
              >
                A collaborative approach built on long-term relationships
                and complete transparency.
              </p>
            </div>

            {/* Badge */}
            <div className="relative z-10 mt-auto pt-5">
              <span
                className="
                  inline-flex
                  h-8
                  items-center
                  gap-2.5
                  rounded-full
                  bg-[#F5EFE2]
                  px-3
                "
              >
                <span
                  className="
                    font-['Geist_Mono',monospace]
                    text-[12px]
                    font-bold
                    leading-4
                    text-[#0E2620]
                  "
                >
                  01
                </span>

                <span
                  className="
                    font-['Geist',sans-serif]
                    text-[12px]
                    font-semibold
                    leading-4
                    text-[#0E2620]
                  "
                >
                  Core strength
                </span>
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT STACK
          ===================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              justify-center
              gap-4
              lg:flex-[696_696_0%]
              lg:min-w-0
            "
          >
            {/* ===================================================
                TOP TWO CARDS
            =================================================== */}

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {/* -------------------------------------------------
                  SAFETY CARD
              ------------------------------------------------- */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="
                  box-border
                  flex
                  min-h-[128px]
                  w-full
                  flex-col
                  items-start
                  gap-3
                  rounded-[14px]
                  border
                  border-[#1E4137]
                  bg-[#123329]
                  p-5
                  shadow-[0px_10px_22px_-10px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C0913F]/40
                  max-sm:min-h-[115px]
                  max-sm:shadow-none
                "
              >
                {/* Top */}
                <div className="flex w-full items-center gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#C0913F]/10
                      max-sm:h-[18px]
                      max-sm:w-[18px]
                      max-sm:rounded-none
                      max-sm:bg-transparent
                    "
                  >
                    <ShieldCheck
                      size={18}
                      strokeWidth={2}
                      className="text-[#C0913F] max-sm:h-[18px] max-sm:w-[18px]"
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      font-['DM_Serif_Text',serif]
                      flex-1
                      text-[20px]
                      font-normal
                      leading-[27px]
                      text-white
                      max-sm:text-[18px]
                      max-sm:leading-[23px]
                    "
                  >
                    Safety Without Compromise
                  </h4>
                </div>

                {/* Description */}
                <p
                  className="
                    font-['Geist',sans-serif]
                    w-full
                    text-[13px]
                    font-normal
                    leading-[150%]
                    text-[#F5EFE2]/90
                  "
                >
                  Clear processes, maintained equipment and disciplined
                  execution across every site.
                </p>
              </motion.div>

              {/* -------------------------------------------------
                  MULTIPLE CAPABILITIES CARD
              ------------------------------------------------- */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12,
                }}
                className="
                  box-border
                  flex
                  min-h-[128px]
                  w-full
                  flex-col
                  items-start
                  gap-3
                  rounded-[14px]
                  border
                  border-[#1E4137]
                  bg-[#123329]
                  p-5
                  shadow-[0px_10px_22px_-10px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C0913F]/40
                  max-sm:min-h-[115px]
                  max-sm:shadow-none
                "
              >
                {/* Top */}
                <div className="flex w-full items-start gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#C0913F]/10
                      max-sm:h-[18px]
                      max-sm:w-[18px]
                      max-sm:rounded-none
                      max-sm:bg-transparent
                    "
                  >
                    <Wallet
                      size={18}
                      strokeWidth={2}
                      className="text-[#C0913F] max-sm:h-[18px] max-sm:w-[18px]"
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      font-['DM_Serif_Text',serif]
                      flex-1
                      text-[20px]
                      font-normal
                      leading-[27px]
                      text-white
                      max-sm:text-[18px]
                      max-sm:leading-[23px]
                    "
                  >
                    Multiple Capabilities. One Team.
                  </h4>
                </div>

                {/* Description */}
                <p
                  className="
                    font-['Geist',sans-serif]
                    w-full
                    text-[13px]
                    font-normal
                    leading-[150%]
                    text-[#F5EFE2]/90
                  "
                >
                  Equipment rental and project logistics models engineered
                  for value — never at the cost of quality.
                </p>
              </motion.div>
            </div>

            {/* ===================================================
                FLEXIBLE BY DESIGN
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.24,
              }}
              className="
                box-border
                flex
                min-h-[117px]
                w-full
                flex-col
                items-start
                gap-3
                rounded-[14px]
                border
                border-[#1E4137]
                bg-[#123329]
                p-5
                shadow-[0px_10px_22px_-10px_rgba(0,0,0,0.15)]
                transition-all
                duration-500
                hover:border-[#C0913F]/40
                max-sm:min-h-[115px]
                max-sm:shadow-none
              "
            >
              {/* Top */}
              <div className="flex w-full items-center gap-3">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#C0913F]/10
                    max-sm:h-[18px]
                    max-sm:w-[18px]
                    max-sm:rounded-none
                    max-sm:bg-transparent
                  "
                >
                  <Layers
                    size={18}
                    strokeWidth={2}
                    className="text-[#C0913F] max-sm:h-[18px] max-sm:w-[18px]"
                  />
                </div>

                {/* Title */}
                <h4
                  className="
                    font-['DM_Serif_Text',serif]
                    flex-1
                    text-[20px]
                    font-normal
                    leading-[27px]
                    text-white
                    max-sm:text-[18px]
                    max-sm:leading-[23px]
                  "
                >
                  Flexible By Design
                </h4>
              </div>

              {/* Description */}
              <p
                className="
                  font-['Geist',sans-serif]
                  w-full
                  text-[13px]
                  font-normal
                  leading-[150%]
                  text-[#F5EFE2]/90
                "
              >
                Construction, equipment rental and project logistics — one
                standard, one team, industrial sites only.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};