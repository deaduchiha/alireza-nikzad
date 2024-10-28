"use client";
import TelegramIcon from "@/components/icons/TelegramIcon";
import XIcon from "@/components/icons/XIcon";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import Link from "next/link";

const SOCIAL_MEDIA = [
  {
    id: "github",
    Icon: <GitHubLogoIcon />,
    link: "https://github.com/deaduchiha/",
  },
  {
    id: "linkedin",
    Icon: <LinkedInLogoIcon />,
    link: "https://www.linkedin.com/in/alireza-nikzad/",
  },
  {
    id: "telegram",
    Icon: <TelegramIcon />,
    link: "https://github.com/deaduchiha/",
  },
  {
    id: "instagram",
    Icon: <InstagramLogoIcon />,
    link: "https://github.com/deaduchiha/",
  },
  {
    id: "x",
    Icon: <XIcon />,
    link: "https://github.com/deaduchiha/",
  },
];

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-2 mt-4"
        >
          {SOCIAL_MEDIA.map(({ id, Icon, link }, i) => (
            <motion.button
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 250,
                delay: 1 + 0.25 * i,
                delayChildren: 1,
                duration: 0.6,
              }}
              className="rounded-full border border-input !w-11 !h-11 bg-background hover:bg-accent hover:text-accent-foreground"
            >
              <Link
                className="w-full h-full flex justify-center items-center"
                target="_blank"
                href={link}
              >
                {Icon}
              </Link>
            </motion.button>
          ))}
        </motion.div>
      </Section>

      <Section>hello</Section>
    </main>
  );
}
