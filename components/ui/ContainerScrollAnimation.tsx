"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScrollAnimation = () => {
    // Ref for the container to track scroll position across container
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.3 end", "end end"],
    });

    // Transformation mapping to scoll position
    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 0.9]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
        className="h-[700px] flex items-center justify-center relative"
        ref={containerRef}
    >
      <div
        className="absolute -top-10"
        style={{
          perspective: "1000px",
        }}
      >
        <Content
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  );
};

export const Content = ({
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
        className="phone overflow-hidden h-[681.69px] relative"
      >
        <div className="overflow-hidden rounded-[36px] h-full relative">
          <motion.div
            className="rounded-lg relative"
            style={{ translateY: translate }}
          >
            <div className="relative md:hidden w-[350px] h-[757.44px]">
              <Image
                className="object-contain rounded-[36px]"
                src="/assets/mockups/skool-example-screenshot-no-homebar.png"
                alt="Propagate Creators Community"
                fill
                priority={true}
              />
            </div>
          </motion.div>
          <div className="absolute bottom-3.5 left-0 right-0 h-[4px] w-[125px] bg-black mx-auto rounded-full" /> {/* Home bar */}
        </div>
      </motion.div>
    );
  };