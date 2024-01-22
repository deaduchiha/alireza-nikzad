"use client";
import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { FaStarOfLife } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialMedia() {
  return (
    <>
      <Divider />
      <Container maxW={"container.lg"} py={5}>
        <Flex
          overflow={"hidden"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
          gap={{ base: 5, sm: "inherit" }}
          alignItems={"center"}
        >
          {data.map((d) =>
            typeof d.title === "string" ? (
              <Text as={Link} href={d.href} key={d.id} target="_blank">
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.7 }}
                >
                  {d.title}
                </motion.div>
              </Text>
            ) : (
              <Box display={{ base: "none", sm: "block" }} key={d.id}>
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.7, delay: 0.5 }}
                >
                  <FaStarOfLife fill="#7A87FB" />
                </motion.div>
              </Box>
            )
          )}
        </Flex>
      </Container>
      <Divider />
    </>
  );
}

const data = [
  { id: 1, title: "Github", href: "https://github.com/deaduchiha/" },
  { id: 2, title: FaStarOfLife, href: "#" },
  {
    id: 3,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/alireza-nikzad/",
  },
  { id: 4, title: FaStarOfLife, href: "#" },
  { id: 5, title: "Telegram", href: "https://t.me/deaduchiha" },
  { id: 6, title: FaStarOfLife, href: "#" },
  { id: 7, title: "Instagram", href: "https://www.instagram.com/alirezankz" },
];
