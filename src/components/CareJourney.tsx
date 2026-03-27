import { motion } from "framer-motion";
import { ui } from "../styles/tokens";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

export default function CareSection() {
  return (
    <section className="bg-[var(--cream)] py-24">

      <div className={`${ui.container}`}>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--mocha)] leading-tight">
            Care for you and your baby,
            <br />
            <em className="text-[var(--rose)]">every single day</em>
          </h2>
        </div>

        {/* 1️⃣ Mother Care */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-2xl p-8 mb-10 shadow-sm"
        >
          <h3 className="font-display text-2xl text-[var(--mocha)] mb-3">
            Mother Care
          </h3>

          <p className="text-body leading-relaxed">
            Motherhood is beautiful, but it can feel overwhelming too.
            At Appuge, we gently care for you — just like you care for your baby.
          </p>

          <p className="mt-3 text-body">
            From helping you rest to supporting your recovery, every moment
            is filled with warmth and love.
          </p>

          <p className="mt-4 text-[var(--rose)] font-medium">
            You deserve to feel cared for, every step of the way.
          </p>
        </motion.div>

        {/* 2️⃣ Baby Care */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-2xl p-8 mb-10 shadow-sm"
        >
          <h3 className="font-display text-2xl text-[var(--mocha)] mb-3">
            Baby Care
          </h3>

          <p className="text-body">
            Your baby’s world is small, but every moment matters.
            We provide gentle care — from soft massages to soothing support.
          </p>

          <p className="mt-3 text-body">
            Every touch is full of love, patience and warmth.
          </p>

          <p className="mt-4 text-[var(--rose)] font-medium">
            Tiny hearts deserve the gentlest care.
          </p>
        </motion.div>

        {/* 3️⃣ Traditions */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          className="bg-[var(--blush)] rounded-2xl p-8 mb-10"
        >
          <h3 className="font-display text-2xl text-[var(--mocha)] mb-3">
            Traditions & Rituals
          </h3>

          <p className="text-body leading-relaxed">
            Every family has beautiful traditions. We respect and follow your
            customs — from postnatal rituals to newborn blessings.
          </p>

          <p className="mt-3 text-body">
            We combine traditional care with modern support to make every
            moment feel safe and meaningful.
          </p>

          <p className="mt-4 text-[var(--rose)] font-medium">
            Love, care and tradition go hand in hand.
          </p>
        </motion.div>

        {/* 4️⃣ Expert + Community */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Expert */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-display text-xl text-[var(--mocha)] mb-2">
              Expert Care
            </h4>

            <p className="text-body text-sm">
              Our team includes gynecologists, pediatric specialists and trained
              caretakers — ensuring safe and professional care at home.
            </p>
          </div>

          {/* Community */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-display text-xl text-[var(--mocha)] mb-2">
              Supportive Community
            </h4>

            <p className="text-body text-sm">
              A warm space where you feel heard, understood and supported
              throughout your motherhood journey.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}