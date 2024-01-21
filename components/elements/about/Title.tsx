import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";

export default function Title() {
  return (
    <Flex>
      <Avatar name="Alireza Nikzad" src="/profile.webp" />
      <Box ml="3">
        <Text fontWeight="bold">
          Alireza Nikzad
          <Badge ml="3" colorScheme="telegram">
            open to work
          </Badge>
        </Text>
        <Text fontSize="sm">front-end developer</Text>
      </Box>
    </Flex>
  );
}
