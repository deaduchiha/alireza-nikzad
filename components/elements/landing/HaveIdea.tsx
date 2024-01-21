import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function HaveIdea() {
  return (
    <Flex mb={10}>
      <Flex flexDir={"column"} gap={10}>
        <Heading as={"h2"}>Have idea about project? ✨</Heading>
        <Flex gap={10} flexDir={"column"}>
          <Text w={{ base: "full", md: "65%" }} textAlign={"justify"}>
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </Text>
          <Button
            as={Link}
            href={"contact-me"}
            variant={"portfolio"}
            w={"fit-content"}
          >
            send me a message
          </Button>
        </Flex>
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        pos={"relative"}
        w={"35%"}
        h={"390px"}
      >
        <Image src={"/message.svg"} alt="message" fill />
      </Box>
    </Flex>
  );
}
