import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card3D({ children }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 15 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateXValue = ((mouseY / height) - 0.5) * 20;
    const rotateYValue = ((mouseX / width) - 0.5) * -20;

    x.set(rotateYValue);
    y.set(rotateXValue);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}
    </motion.div>
  );
}