import { motion } from "framer-motion";
import { ui } from "../styles/tokens";
import Card3D from "../components/ui/3DCard";

const steps = [
  {
    title: "The Little Worries",
    text: "No one prepares you for the quiet moments, the small worries, and the tired days after delivery.",
  },
  {
    title: "The Silent Exhaustion",
    text: "Motherhood begins with love — but also with exhaustion and uncertainty.",
  },
  {
    title: "The Need for Support",
    text: "In those moments, what you need most is not advice — but someone by your side.",
  },
  {
    title: "Gentle Care Arrives",
    text: "At Appuge, we hold you through it all with warm mother and baby care at home.",
  },
  {
    title: "You Feel Like Yourself Again",
    text: "With rest and care, you slowly heal — while your baby is nurtured with love.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-[var(--blush)] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-warm-gradient opacity-40" />

      <div className={`${ui.container} relative z-10 py-28`}>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-[var(--mocha)] leading-tight">
            No one prepares you <br />
            for what comes <em className="text-[var(--rose)]">after delivery</em>
          </h2>

          <div className="divider-ornament mt-8 justify-center" />
        </div>

        {/* 3D CARDS FLOW */}
        <div className="mt-24 flex flex-col gap-16">

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                <Card3D>
                  <div
                    className={`max-w-md p-8 rounded-[28px] shadow-xl 
                    bg-white/70 backdrop-blur-xl border border-white/40
                    ${isLeft ? "rotate-[-3deg]" : "rotate-[3deg]"}
                    hover:rotate-0 transition-all duration-500`}
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-[28px] bg-[var(--rose)]/10 opacity-0 hover:opacity-100 transition duration-500" />

                    <h3 className="font-display text-2xl text-[var(--mocha)] mb-3 relative z-10">
                      {step.title}
                    </h3>

                    <p className="text-body opacity-80 relative z-10">
                      {step.text}
                    </p>

                  </div>
                </Card3D>

              </motion.div>
            );
          })}

        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-32 text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-2xl md:text-3xl text-[var(--mocha)] leading-relaxed">
            Through complete maternity care at home, Appuge wraps you in
            <em className="text-[var(--rose)]"> care, calm, and love</em>
          </p>

          <p className="mt-6 text-accent-font text-xl text-[var(--rose)]">
            You don’t have to go through it alone.
          </p>
        </motion.div>

      </div>
    </section>
  );
}