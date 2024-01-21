import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function WorkCard() {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      alignItems={"flex-start"}
      my={"100px"}
      gap={{ base: 3, md: "40px" }}
      py={2}
    >
      <Heading fontSize={"1rem"} as={"h3"} w={{ base: "full", md: "140px" }}>
        Work Experiences
      </Heading>
      <Box>
        {data.map((d) => (
          <Box my={d.id === 1 ? 0 : 10} key={d.id}>
            <Flex flexDir={"column"} gap={1}>
              <Heading as={"h2"} fontSize={"1rem"}>
                {d.company}
              </Heading>
              <Flex color={"#ccc"} gap={10}>
                <Text>{d.date}</Text>
                <Text>{d.place}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

const data = [
  {
    id: 1,
    company: "DROPLINKED",
    date: "March 2023 – May 2023",
    place: "Berlin, Germany",
  },
  {
    id: 2,
    company: "ARMAN PAJOUHAN IN SCIENCE & TECHNOLOGY PARK",
    date: "June 2021 – December 2021",
    place: "Sari, Mazandaran, Iran",
  },
  {
    id: 3,
    company: "STRING STUDIO",
    date: "November 2020 - january 2021",
    place: "Golestan, Gorgan",
  },
  {
    id: 4,
    company: "SEPEHR ACADEMY",
    date: "May 2020 – October 2020",
    place: "Sari, Mazandaran, Iran",
  },
];
