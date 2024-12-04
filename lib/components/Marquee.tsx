import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  gap?: number;
};

export const Marquee = ({
  children,
  speed = 20,
  gap = 10,
}: MarqueeProps) => {

  return (
    <div className="overflow-hidden w-full py-8 whitespace-nowrap">
      <div className="flex">
        <motion.div
          className="flex"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
          style={{ gap }}
        >
          <div className={`flex flex-shrink-0`}>
            {children}
          </div>
        </motion.div>

        <motion.div
          className="flex"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
          style={{ gap }}
        >
          <div className={`flex flex-shrink-0`}>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
