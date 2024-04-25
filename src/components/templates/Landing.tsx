import { Box } from "@chakra-ui/react";
import IntroductionSvg from "../modules/landing/introduction/IntroductionSvg";
import Information from "../modules/landing/information/Information";

const Landing = () => {
  return (
    <Box
      scrollSnapType={"y mandatory"}
      overflowY={"scroll"}
      h={"100vh"}
      scrollBehavior={"smooth"}
      scrollSnapStop="always"
    >
      <IntroductionSvg />
      <Information />
    </Box>
  );
};

export default Landing;
