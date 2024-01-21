import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { TbSmartHome } from "react-icons/tb";
import { navData } from "./data";
import { createElement } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <Container
        maxW={"container.lg"}
        as={Flex}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        py={"46px"}
      >
        <Flex display={{ base: "none", md: "flex" }}>
          <Text fontSize={"24px"}>alireza</Text>
        </Flex>
        <Box
          rounded={"290px"}
          bgGradient="linear(to-r, #7A87FB, #FFD49C)"
          p={"1.5px"}
        >
          <Flex
            bg="#1C1C1C"
            rounded="full"
            px={"16px"}
            py={"10px"}
            gap={{ base: "15px", md: "36px" }}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {navData.map((data) => (
              <Box
                as={Link}
                href={data.href}
                p={"8px 16px"}
                bg={pathname === data.href ? "#292929" : "inherit"}
                borderRadius="full"
                _hover={{
                  bg: "#292929",
                  p: "8px 16px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                key={data.id}
              >
                {data.component === Box ? (
                  <TbSmartHome fontSize={"1.4rem"} />
                ) : (
                  createElement(data.component, { key: data.id }, data.title)
                )}
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex display={{ base: "none", md: "flex" }}>
          <Button variant={"portfolio"} as={Link} href={"/contact-me"}>
            Contact me
          </Button>
        </Flex>
      </Container>
    </>
  );
}
