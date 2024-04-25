"use client";
import { Box, Flex } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

const Information = () => {
  const controls = useDragControls();
  const [grab, setGrab] = useState<string>("grab");

  const customBox = [
    { id: 1, bg: "#fff" },
    { id: 2, bg: "#fff" },
    { id: 3, bg: "#fff" },
    { id: 4, bg: "#fff" },
    { id: 5, bg: "#fff" },
    { id: 6, bg: "#fff" },
  ];
  return (
    <Flex
      flexWrap={"wrap"}
      h={"100vh"}
      scrollSnapAlign={"start"}
      pos={"relative"}
    >
      {customBox.map((b) => (
        <Box key={b.id} w={"33%"} h={"50vh"} bg={b.bg} color={"#000"}>
          something
        </Box>
      ))}
      <Box
        as={motion.div}
        drag
        onPointerDown={() => {
          setGrab("grabbing");
        }}
        onPointerUp={() => {
          setGrab("grab");
        }}
        cursor={grab}
        dragConstraints={{
          top: -180,
          left: -350,
          right: 350,
          bottom: 180,
        }}
        // dragElastic={0.5}
        dragSnapToOrigin
        dragControls={controls}
        pos={"absolute"}
        zIndex={2}
        w={"100px"}
        h={"100px"}
        borderRadius={100}
        border={"1px solid #252525"}
        background="rgba(0,0,0,0.5)"
        inset={0}
        m={"auto"}
        _before={{
          content: '""',
          pos: "absolute",
          bottom: "-12px",
          right: "-29px",
          w: 14,
          h: "0.5",
          bg: "#252525",
          transform: "rotate(48deg)",
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
        }}
      ></Box>
    </Flex>
  );
};

export default Information;
