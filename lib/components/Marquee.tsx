import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type MarqueeProps = {
  children: ReactNode;
  speed?: number; // Animation duration in seconds
  gap?: number; // Gap between items in pixels
};

export const Marquee = ({ children, speed = 50, gap = 10 }: MarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      // Calculate the total width of the content
      setContentWidth(marqueeRef.current.scrollWidth);
      console.log(contentWidth);
    }
  }, [children]);

  const duration = (contentWidth / speed) * 1.5;

  return (
    <div className="overflow-hidden w-full py-8 whitespace-nowrap">
      <div className="flex" style={{ gap }}>
      <motion.div
        ref={marqueeRef}
        className="flex flex-shrink-0"
        initial={{ x: `100%` }}
        animate={{ x: `-${contentWidth}px` }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
        style={{ gap }}
      >
        <div className="inline-flex items-center" style={{ gap }}>
          {children}
        </div>
      </motion.div>

      <motion.div
        ref={marqueeRef}
        className="flex flex-shrink-0"
        initial={{ x: `100%` }}
        animate={{ x: `-${contentWidth}px` }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
        style={{ gap }}
      >
        <div className="inline-flex items-center " style={{ gap }}>
          {children}
        </div>
      </motion.div>
    </div>
    </div>
  );
};
