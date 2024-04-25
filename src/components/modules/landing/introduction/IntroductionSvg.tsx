"use client";

import { Flex } from "@chakra-ui/react";
import EnInfo from "./parts/EnInfo";
import FaInfo from "./parts/FaInfo";
import "./test.css";
import { motion } from "framer-motion";

const IntroductionSvg = () => {
  return (
    <Flex
      h="100svh"
      w={"85%"}
      justifyContent="center"
      alignItems="center"
      m={"auto"}
      scrollSnapAlign={"start"}
    >
      <motion.svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        xlinkActuate="http://www.w3.org/1999/xlink"
        viewBox="0 0 1056.54 452.16"
      >
        <motion.defs>
          <motion.linearGradient
            id="linear-gradient"
            x1="91.49"
            y1="153.24"
            x2="436.04"
            y2="352.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ccc" />
            <stop offset="1" stopColor="#4d4d4d" />
          </motion.linearGradient>
        </motion.defs>

        <motion.g id="Layer_1-2" data-name="Layer 1">
          <FaInfo />

          <motion.path
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="cls-1"
            d="m241.51,0h30.24C330.56,0,378.31,47.75,378.31,106.56v345.6h-243.36V106.56C134.95,47.75,182.69,0,241.51,0Z"
          />
          <motion.line
            className="cls-3"
            x1="317.07"
            y1="407.52"
            x2="1055.79"
            y2="407.52"
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          />

          <EnInfo />
        </motion.g>
      </motion.svg>
    </Flex>
  );
};

export default IntroductionSvg;
