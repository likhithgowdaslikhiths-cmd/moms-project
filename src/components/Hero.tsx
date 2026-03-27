import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { typography, ui } from "../styles/tokens";

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    text: "An Appuge is the silent conversation of mother’s touch with the baby",
  },
  {
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6",
    text: "You are safe, you are home, you are protected",
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    text: "Bridging ancestral hug & rituals with modern wellness",
  },
  {
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b",
    text: "In her arms, the world is small, quiet and perfectly safe",
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    text: "Her love whispers through gestures, patience and sleepless nights",
  },
];

export default function Hero() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // premium timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-blush overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-peachLight via-blush to-gold/20 opacity-60" />

      <div className={`${ui.container} ${ui.section} relative z-10`}>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-secondary font-medium tracking-wide">
              Gentle Care for Mothers
            </p>

            <h1 className="font-display text-5xl md:text-6xl text-primary leading-tight">
              Supporting You Through Every Beautiful Moment
            </h1>

            <p className="text-muted max-w-lg leading-relaxed">
              Experience personalized pre and post maternity care designed
              to nurture your body, mind, and baby with warmth and trust.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full shadow-md transition-all duration-300">
                <span className="text-xs tracking-widest uppercase font-medium">
                  Book Consultation
                </span>
              </button>

              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-all duration-300">
                <span className="text-xs tracking-widest uppercase font-medium">
                  Explore Services
                </span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE + STORY */}
          <div className="relative h-[500px]">

            {/* IMAGE SLIDER */}
            <div className="rounded-[30px] overflow-hidden shadow-xl relative h-full">

              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].image}
                  alt="Maternity Care"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

            </div>

            {/* FLOATING STORY CARD */}
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-lg border border-gold/20 max-w-[280px]"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm text-primary leading-relaxed italic"
                >
                  {slides[index].text}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* PROGRESS BAR */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
              <motion.div
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-primary"
              />
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}