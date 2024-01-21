"use client";
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect } from "react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mnqyedaa");
  const toast = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Your message has been sent successfully.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    }
  }, [state, toast]);

  return (
    <Container maxW={"container.lg"}>
      <Heading my={20} as={"h2"}>
        Contact
      </Heading>
      <Flex
        w={{ base: "full", md: "400px" }}
        as={"form"}
        gap={5}
        flexDir={"column"}
        onSubmit={handleSubmit}
      >
        <Input
          borderRadius={"full"}
          type="email"
          id="email"
          name="email"
          placeholder="your email"
        />
        <Text
          as={ValidationError}
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <Textarea id="message" name="message" placeholder="your message" />

        <Button variant={"portfolio"} w={"fit-content"} type="submit">
          Send message
        </Button>
      </Flex>
    </Container>
  );
}
