"use client";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Section>
        <motion.h1
          initial={{ x: -60, y: -40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="font-bold text-[2rem] md:text-[4rem] lg:text-[6rem]"
        >
          Web developer
        </motion.h1>
        <motion.button
          initial={{ x: -60, y: -40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="mt-10 rounded-full border border-input px-4 py-2 bg-background hover:bg-accent hover:text-accent-foreground"
        >
          Alireza Nikzad
        </motion.button>
      </Section>

      <Section>hello</Section>
    </main>
  );
}
