import { Container } from "@chakra-ui/react";
import Introduction from "../elements/landing/Introduction";
import Roadmap from "../elements/landing/Roadmap";
import SocialMedia from "../elements/landing/SocialMedia";
import Projects from "../elements/landing/Projects";
import HaveIdea from "../elements/landing/HaveIdea";

const LandingPage = () => {
  return (
    <>
      <Introduction />
      <SocialMedia />
      <Container maxW={"container.lg"}>
        <Roadmap />
        <Projects />
        <HaveIdea />
      </Container>
    </>
  );
};
export default LandingPage;
