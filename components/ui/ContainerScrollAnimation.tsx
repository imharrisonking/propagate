"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScrollAnimation = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.3 end", "end end"],
  });

  console.log(scrollYProgress);

//   True values
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 0.9]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   Reverse values
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
//   const scale = useTransform(scrollYProgress, [0, 1], [0.9, 0.8]);
//   const translate = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <div
        className="h-[900px] flex items-center justify-center relative"
        ref={containerRef}
    >
      <div
        className="absolute -top-10"
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
        scale}}
      className="phone overflow-hidden h-[681.69px] "
    >
      <div className="overflow-hidden rounded-[36px] h-[681.69px]">
          <motion.div
            className="rounded-lg relative"
            style={{ translateY: translate }}
        >
            <div className="md:hidden w-[350px] h-[757.44px]">
                <Image
                    className="object-contain rounded-[36px]"
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