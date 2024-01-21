"use client";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <Container
      maxW={"container.lg"}
      h={"569px"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos={"center"}
      bgImage={{ base: "url('/table-base.svg')", md: "url('/table.svg')" }}
      pos={"relative"}
      overflow={"hidden"}
    >
      <Box
        left={0}
        right={0}
        top={100}
        pos={"absolute"}
        m={"0 auto"}
        w={{ base: "90%", md: "70%", lg: "60%" }}
        as={motion.div}
        color={"transparent"}
        initial={{ opacity: 0, marginTop: "-200px", color: "transparent" }}
        animate={{ opacity: 1, marginTop: "0", color: "#fff" }}
        transition="1s"
      >
        <Heading
          textAlign={"center"}
          mb={2}
          fontSize={"2rem"}
          //   drag="x"
          //   dragConstraints={{ left: -100, right: 100 }}
        >
          Alireza Nikzad
        </Heading>
        <Text as={motion.p} textAlign={"center"} fontSize={"1.2rem"}>
          Experienced in creating visually appealing interfaces as a Front-end
          developer and UI/UX design enthusiast, with a medium foundation in
          backend development.
        </Text>
      </Box>
    </Container>
  );
}
