import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { TvIcon, XIcon } from "lucide-react";

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
    Icon: <TvIcon />,
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

const biography = `I'm a frontend developer with a keen focus on new technologies. My
              extensive experience in the frontend industry has been channeled
              towards specialized consulting, contracting and freelance work My
              primary objective is to facilitate the growth and innovation of
              the web developing. By combining our efforts, we can significantly
              contribute to the advancement of decentralized technology.`;

export { SOCIAL_MEDIA, biography };
