import { Container } from "@chakra-ui/react";
import Title from "../elements/about/Title";
import Information from "../elements/about/Information";

export default function AboutPage() {
  return (
    <Container maxW={"container.lg"}>
      <Title />
      <Information />
    </Container>
  );
}
