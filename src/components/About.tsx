import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ui } from "../styles/tokens";

/* ── Data ──────────────────────────────────────────────────────── */
const pillars = [
  {
    num: "01",
    title: "Postnatal Recovery",
    text: "Gentle oil massages, bathing assistance, and full emotional support through every step of your recovery journey.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.9 4.068 2 7 2c1.997 0 4.114.98 5 3 .886-2.02 3.003-3 5-3 2.932 0 6 1.9 6 5.191 0 4.105-5.371 8.863-11 14.402z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Newborn Baby Care",
    text: "Expert newborn care wrapped in wisdom gentle massage, safe bathing, and soothing support for your precious one.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sacred Traditions",
    text: "We honor your family's customs and rituals blending the wisdom of tradition with the care of modern support.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

/* ── Animation variants ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const lineGrow = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

/* ════════════════════════════════════════════════════════════════
   COMPONENT
════════════════════════════════════════════════════════════════ */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--blush)" }}
    >

      {/* ══ 1. FULL-WIDTH EDITORIAL HEADER ══════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: "var(--mocha)" }}>

        {/* Ghost watermark */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center
                     pointer-events-none select-none"
          style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "clamp(120px, 28vw, 360px)",
            fontWeight:    300,
            color:         "rgba(255,255,255,0.03)",
            letterSpacing: "0.1em",
            lineHeight:    1,
          }}
        >
          Appuge
        </span>

        <div className={`${ui.container} relative z-10 py-20 md:py-28`}>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-end">

            {/* Left — tag + title */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div variants={fadeUp(0)} className="mb-5">
                <span
                  className="inline-flex items-center gap-3"
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      10,
                    fontWeight:    500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color:         "var(--gold)",
                  }}
                >
                  <span className="block h-px w-7 opacity-50"
                    style={{ background: "var(--gold)" }} />
                  About Appuge
                  <span className="block h-px w-7 opacity-50"
                    style={{ background: "var(--gold)" }} />
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp(0.1)}
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "clamp(36px, 5vw, 64px)",
                  fontWeight:    500,
                  color:         "var(--cream)",
                  lineHeight:    1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Nurturing the
                <br />
                <em style={{ color: "var(--rose-light, #EDD5CC)", fontStyle: "italic" }}>
                  woman who holds
                </em>
                <br />
                her world
              </motion.h2>
            </motion.div>

            {/* Center ornament divider */}
            <div className="hidden md:flex flex-col items-center self-stretch mx-12">
              <div className="flex-1 w-px"
                style={{ background: "rgba(201,169,110,0.2)" }} />
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: 28, color: "var(--gold)",
                opacity: 0.5, lineHeight: 1, padding: "10px 0",
              }}>✦</span>
              <div className="flex-1 w-px"
                style={{ background: "rgba(201,169,110,0.2)" }} />
            </div>

            {/* Right — intro paragraph */}
            <motion.div
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col justify-end"
            >
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 15, lineHeight: 1.85,
                color: "rgba(253,246,240,0.65)",
              }}>
                At Appuge, we believe a happy baby begins with a{" "}
                <span style={{ color: "var(--cream)", fontWeight: 500 }}>nurtured mama.</span>{" "}
                We specialize in the sacred art of{" "}
                <span style={{ color: "var(--cream)", fontWeight: 500 }}>"mothering the mother,"</span>{" "}
                pairing restorative traditional rituals with intuitive modern support
                through our dedicated maternity care at home.
              </p>

              <motion.div
                variants={lineGrow}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 h-px origin-left"
                style={{ background: "rgba(201,169,110,0.3)" }}
              />

              <p className="mt-5" style={{
                fontFamily: "var(--font-accent)",
                fontSize: 22, fontWeight: 500,
                color: "var(--rose-light, #EDD5CC)",
              }}>
                Held with love. Wrapped in care.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══ 2. PARALLAX IMAGE + LAYERED CONTENT ════════════════ */}
      <div className="relative" style={{ minHeight: 600 }}>

        {/* Left 55% — parallax image */}
        <motion.div
          className="absolute top-0 left-0 bottom-0 overflow-hidden"
          style={{ width: "55%", zIndex: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/02.jpg"
            alt="Mother being cared for at home"
            className="w-full object-cover"
            style={{
              y: imgY,
              filter:    "sepia(10%) saturate(85%) brightness(0.95)",
              height:    "120%",
              marginTop: "-10%",
            }}
          />
          {/* Right fade to background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background:
              "linear-gradient(to right, transparent 50%, var(--blush) 100%), " +
              "linear-gradient(to bottom, transparent 60%, rgba(92,61,46,0.45) 100%)",
          }} />
        </motion.div>

        {/* Right content panel */}
        <div className={`${ui.container} relative h-full`} style={{ zIndex: 2 }}>
          <div className="flex justify-end">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-[48%] py-16 md:py-20 space-y-8"
            >
              {/* Body paragraphs */}
              {([
                <>
                  Whether you are navigating the final weeks of a bump or the
                  beautiful, quiet intensity of the newborn haze,{" "}
                  <strong style={{ color: "var(--mocha)", fontWeight: 500 }}>
                    we protect your peace.
                  </strong>{" "}
                  Our practitioners provide expert mother and baby care at home,
                  allowing you to grow in grace while we tend to your recovery.
                </>,
                <>
                  From the gentle strength of{" "}
                  <strong style={{ color: "var(--mocha)", fontWeight: 500 }}>
                    postnatal care at home
                  </strong>{" "}
                  to the delicate first guidance of{" "}
                  <strong style={{ color: "var(--mocha)", fontWeight: 500 }}>
                    newborn baby care,
                  </strong>{" "}
                  we ensure you are never alone in this transition. Every detail
                  is held with the deepest intention.
                </>,
                <>
                  In every thread and every ritual, we honor{" "}
                  <strong style={{ color: "var(--mocha)", fontWeight: 500 }}>
                    the woman you were
                  </strong>{" "}
                  and the mother you are becoming. With our post-delivery care,
                  you receive a sanctuary wrapped in wisdom and rooted in love.
                </>,
              ] as React.ReactNode[]).map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp(i * 0.1)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize:   15,
                    lineHeight: 1.85,
                    color:      "var(--muted)",
                  }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Closing accent */}
              <motion.div variants={fadeUp(0.3)} className="pt-2">
                <div className="divider-ornament mb-5" />
                <p style={{
                  fontFamily: "var(--font-accent)",
                  fontSize:   24,
                  fontWeight: 500,
                  color:      "var(--rose)",
                  lineHeight: 1.3,
                }}>
                  You're never alone —<br />
                  we're right here with you.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp(0.4)}>
                <button className="btn-primary btn-heartbeat">
                  <span>Begin Your Care Journey</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating quote card bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="absolute bottom-10 z-10"
          style={{
            left:              "3%",
            maxWidth:          300,
            background:        "rgba(253,246,240,0.93)",
            backdropFilter:    "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border:            "1px solid rgba(201,169,110,0.22)",
            borderRadius:      2,
            padding:           "22px 26px",
          }}
        >
          <span className="block mb-2" style={{
            fontFamily: "var(--font-display)",
            fontSize:   44,
            color:      "var(--gold)",
            opacity:    0.35,
            lineHeight: 0.75,
          }}>"</span>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize:   16,
            fontStyle:  "italic",
            color:      "var(--mocha)",
            lineHeight: 1.55,
            fontWeight: 400,
          }}>
            Mothering the mother — because she deserves care too.
          </p>
        </motion.div>

      </div>

      {/* ══ 3. THREE PILLARS ════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid var(--border)", background: "var(--cream)" }}>
        <div className={ui.container}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                variants={fadeUp(i * 0.1)}
                className="group relative px-10 py-12 overflow-hidden"
                style={{
                  borderRight:
                    i < pillars.length - 1 ? "1px solid var(--border)" : "none",
                }}
                whileHover={{ backgroundColor: "var(--blush)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="absolute -top-2 right-4 pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize:   88,
                    fontWeight: 300,
                    color:      "rgba(201,169,110,0.09)",
                    lineHeight: 1,
                  }}
                >
                  {pillar.num}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5
                             transition-all duration-300 group-hover:bg-white"
                  style={{
                    border:     "1px solid var(--border)",
                    background: "var(--blush)",
                    color:      "var(--gold)",
                  }}
                >
                  {pillar.icon}
                </div>

                {/* Animated gold accent line */}
                <motion.div
                  variants={lineGrow}
                  className="h-px mb-5 origin-left"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), transparent)",
                    opacity:    0.5,
                    width:      "40%",
                  }}
                />

                <h4 className="mb-3" style={{
                  fontFamily: "var(--font-display)",
                  fontSize:   22,
                  fontWeight: 500,
                  color:      "var(--mocha)",
                  lineHeight: 1.2,
                }}>
                  {pillar.title}
                </h4>

                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   13,
                  lineHeight: 1.8,
                  color:      "var(--muted)",
                }}>
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══ 4. BOTTOM PROMISE BANNER ════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
        style={{ background: "var(--mocha)" }}
      >
        {/* Decorative rings */}
        <div aria-hidden className="absolute -right-24 -top-24 w-72 h-72 rounded-full
          pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.08)" }} />
        <div aria-hidden className="absolute -right-12 -top-12 w-44 h-44 rounded-full
          pointer-events-none"
          style={{ border: "1px solid rgba(201,169,110,0.07)" }} />

        <div className={`${ui.container} py-14`}>
          <div className="flex flex-col md:flex-row items-center
                          justify-between gap-8">

            <div className="text-center md:text-left">
              <p style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "clamp(22px, 3vw, 36px)",
                fontWeight:    500,
                color:         "var(--cream)",
                lineHeight:    1.25,
                letterSpacing: "-0.01em",
              }}>
                In every thread and every ritual,
                <br />
                <em style={{ color: "var(--rose-light, #EDD5CC)", fontStyle: "italic" }}>
                  we honour the woman you are becoming.
                </em>
              </p>
              <p className="mt-3" style={{
                fontFamily:    "var(--font-body)",
                fontSize:      13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         "rgba(201,169,110,0.6)",
              }}>
                Post-delivery care at home · Bangalore
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <button
                className="btn-primary"
                style={{ background: "var(--rose)" }}
              >
                <span>Book a Free Consultation</span>
              </button>
              <p style={{
                fontFamily: "var(--font-accent)",
                fontSize:   18,
                fontWeight: 500,
                color:      "rgba(237,213,204,0.7)",
              }}>
                We're right here with you.
              </p>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}