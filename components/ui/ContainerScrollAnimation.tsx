"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScrollAnimation = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

//   True values
  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.9]);
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

//   Reverse values
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
//   const scale = useTransform(scrollYProgress, [0, 1], [0.9, 0.8]);
//   const translate = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div
        className="h-[900px] flex justify-center relative"
        ref={containerRef}
    >
      <div
        className="absolute -top-20"
        style={{
          perspective: "1000px",
        }}
      >
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  );
};


export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="phone"
    >
      <div className="h-full w-full rounded-2xl overflow-hidden">
          <motion.div
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
        >
            <div className="md:hidden w-[350px] h-[757.44px]">
                <Image
                    className="border-box object-contain"
                    src="/skool-propagate-screenshot.png"
                    alt="Propagate Creators Community"
                    fill
                />
            </div>
          </motion.div>
      </div>
    </motion.div>
  );
};
