import { Box, Flex, Heading } from "@chakra-ui/react";
import IntroductionSvg from "../modules/landing/introduction/IntroductionSvg";

const Landing = () => {
  return (
    <Flex
      h="100svh"
      w={"75%"}
      justifyContent="center"
      alignItems="center"
      m={"auto"}
    >
      <IntroductionSvg />
    </Flex>
  );
};

export default Landing;
