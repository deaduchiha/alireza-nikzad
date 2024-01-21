"use client";

import {
  Box,
  Heading,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Roadmap() {
  const { activeStep } = useSteps({
    index: 5,
    count: steps.length,
  });
  return (
    <>
      <Heading mt={"91px"} mb={"30px"} as={"h2"}>
        My journey ✨
      </Heading>

      <Stepper
        mb={10}
        colorScheme="teal"
        index={activeStep}
        orientation="vertical"
        height="700px"
        gap="0"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box w={{ base: "unset", sm: "350px" }}>
              <StepTitle style={{ color: "#fff" }}>{step.title}</StepTitle>
              <StepDescription style={{ color: "#ccc" }}>
                {step.description}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </>
  );
}

const steps = [
  {
    title: "First",
    description:
      "In the beginning, I learned HTML, CSS, and JavaScript at the Bahr Academy.",
  },
  {
    title: "Second",
    description:
      "After one year, I teamed up with @sholemvfi and started to learning about REACT. This time I had a code mate to participate in web development competitions.",
  },
  {
    title: "Third",
    description:
      "The only things that I used to do back then were reading documents, watching tutorials, and trying new technologies ",
  },
  {
    title: "Fourth",
    description: "then i started learning backend and databases and NEXT.JS",
  },
  {
    title: "Fifth",
    description:
      "So far, I haven't mentioned the person who was there for me at all times to teach me and guide me, and answer all my challenging questions",
  },
  {
    title: "Sixth",
    description:
      "At this moment, I lead multiple freelance projects as I grow more and more like @narixius",
  },
];
