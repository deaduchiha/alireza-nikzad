"use client";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Heading mt={"91px"} mb={"30px"} as={"h2"}>
        Some Projects ✨
      </Heading>

      <VStack mb={20} spacing={10}>
        {data.map((d) => (
          <Flex
            as={motion.div}
            initial={{ opacity: 0, y: 180 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={"0.8s"}
            viewport={{ margin: "-100px", once: true }}
            borderRadius={5}
            key={d.id}
            alignItems={"center"}
            bg={"#151515"}
            w={"full"}
            p={{ base: 4, md: "55px 95px" }}
            gap={{ base: 10, md: 24 }}
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              pos={"relative"}
              w={{ base: "full", md: "60%" }}
              h={{ base: "310px", md: "360px" }}
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                style={{ objectFit: "scale-down" }}
              />
            </Box>
            <VStack
              spacing={7}
              alignSelf={{ base: "flex-start", md: "center" }}
            >
              <Text
                bg={"rgba(0, 0, 0, 0.05)"}
                w={"53px"}
                h={"53px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"100%"}
                border={"0.84px solid #7D7D7D;"}
                borderBottom={"1.6px solid #FFD49C"}
                backgroundClip={"text"}
                fontSize={"26px"}
                fontWeight={700}
                color={"#7A87FB"}
              >
                {d.id}
              </Text>
              <Text fontSize={"2.2rem"} fontWeight={700}>
                {d.name}
              </Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </>
  );
}

const data = [
  { id: 1, name: "HKA", image: "/hka.png" },
  { id: 2, name: "Aryana", image: "/aryana.png" },
  { id: 3, name: "rhino menu", image: "/rhinomenu.png" },
];
