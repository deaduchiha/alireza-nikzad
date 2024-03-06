import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function InfoCard({ t, d }: { t: string; d: string }) {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      alignItems={"flex-start"}
      my={"100px"}
      gap={{ base: 3, md: "40px" }}
      py={2}
    >
      <Heading fontSize={"1rem"} as={"h3"} w={{ base: "full", md: "140px" }}>
        {t}
      </Heading>
      <Text
        textAlign={"left"}
        color={"#ccc"}
        as={"p"}
        w={{ base: "full", md: "60%" }}
      >
        {d}
      </Text>
    </Flex>
  );
}
