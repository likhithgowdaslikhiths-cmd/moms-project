import { motion } from "framer-motion";
import { ui } from "../styles/tokens";

/* Animation */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

/* Data */
const services = [
  {
    title: "Pre-Pregnancy Mother Care",
    subtitle: "Nurturing you, before you nurture a life",
    points: [
      "Body care and relaxation support",
      "Oil massage therapy",
      "Hygiene and bathing assistance",
      "Stress relief and wellness care",
    ],
  },
  {
    title: "Post-Pregnancy Mother Care",
    subtitle: "Holding you close, while you heal and rest",
    points: [
      "Postnatal recovery support",
      "Full body oil massage",
      "Bathing assistance",
      "Health and hygiene care",
      "Emotional and physical support",
    ],
  },
  {
    title: "Baby Care",
    subtitle: "Tiny hands, gentle care, endless love",
    points: [
      "Gentle baby oil massage",
      "Safe and hygienic bathing",
      "Diaper changing and cleaning",
      "Handling and soothing care",
    ],
  },
  {
    title: "Mother Baby Care",
    subtitle: "Caring for both, with double the love",
    points: [
      "Complete care for mother and baby",
      "Oil massage for both",
      "Bathing assistance",
      "Daily hygiene and support",
    ],
  },
  {
    title: "All-in-One Care",
    subtitle: "From little moments to everything in between",
    highlight: true,
    points: [
      "Complete mother & baby care",
      "Household support",
      "Cooking assistance",
      "Cleaning and maintenance",
      "Dedicated caretaker",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative bg-[var(--cream)] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-warm-gradient opacity-30" />

      <div className={`${ui.container} relative z-10 py-28`}>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            className="text-label text-[var(--gold-dark)]"
          >
            Our Care
          </motion.p>

          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            className="mt-4 font-display text-5xl md:text-6xl text-[var(--mocha)] leading-tight"
          >
            Thoughtfully designed care <br />
            for every step of your journey
          </motion.h2>

          <div className="divider-ornament mt-8 justify-center" />

        </div>

        {/* Services Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group p-8 rounded-[28px] backdrop-blur-xl transition-all duration-500
              ${
                service.highlight
                  ? "bg-[var(--rose)] text-white shadow-xl scale-[1.03]"
                  : "bg-white/70 border border-white/40 hover:shadow-lg"
              }`}
            >

              {/* Title */}
              <h3 className="font-display text-2xl mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p
                className={`text-sm mb-4 ${
                  service.highlight
                    ? "text-white/80"
                    : "text-muted"
                }`}
              >
                {service.subtitle}
              </p>

              {/* Points */}
              <ul className="space-y-2 text-sm">

                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2 ${
                      service.highlight
                        ? "text-white/90"
                        : "text-[var(--mocha)]"
                    }`}
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    {point}
                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="visible"
          className="mt-20 text-center"
        >
          <button className="btn-primary px-8 py-4 text-sm tracking-wide">
            Book Your Care Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}