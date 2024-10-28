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
    link: "https://t.me/deaduchiha",
  },
  {
    id: "instagram",
    Icon: <InstagramLogoIcon />,
    link: "https://www.instagram.com/alirezankz/",
  },
  {
    id: "x",
    Icon: <XIcon />,
    link: "https://x.com/alirezankz",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Section>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="font-bold text-[3rem] md:text-[6rem] lg:text-[8rem]"
        >
          Web developer
        </motion.h1>
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="mt-14 rounded-full border text-md border-input px-4 py-2 bg-background hover:bg-accent hover:text-accent-foreground"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"
        >
          <motion.div
            className="text-justify"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, stiffness: 200, type: "spring" }}
          >
            <p className="font-bold mb-2">About</p>
            <p className="text-slate-700">
              a frontend developer with a keen focus on new technologies. My
              extensive experience in the frontend industry has been channeled
              towards specialized consulting, contracting and freelance work My
              primary objective is to facilitate the growth and innovation of
              the web developing. By combining our efforts, we can significantly
              contribute to the advancement of decentralized technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, stiffness: 200, type: "spring" }}
          >
            <p className="font-bold mb-2">Contact</p>
            <a
              className="text-slate-700"
              href="mailto:alireza.nikzdd@gmail.com"
            >
              alireza.nikzdd@gmail.com
            </a>
            <br />

            <a
              className="text-slate-700 inline-block mt-1"
              href="tel:+989904100416"
            >
              {" "}
              +98 990 410 0416
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, stiffness: 200, type: "spring" }}
          >
            <p className="font-bold mb-2">Stacks:</p>
            <p className="text-slate-700">Frontend</p>
            <p className="text-slate-700">Backend</p>
          </motion.div>
        </motion.div>
      </Section>

      <Section>hello</Section>
    </main>
  );
}
