import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

import { SiFigma } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { SiJirasoftware } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";

const socialMediaData = [
  {
    name: "linkedin",
    icon: <GrLinkedin />,
    url: "https://www.linkedin.com/in/alireza-nikzad/",
  },
  {
    name: "github",
    icon: <ImGithub />,
    url: "https://github.com/deaduchiha",
  },
  {
    name: "instagram",
    icon: <GrInstagram />,
    url: "https://www.instagram.com/alirezankz/",
  },
  {
    name: "telegram",
    icon: <FaTelegram />,
    url: "https://t.me/deaduchiha",
  },
];

const abilities = [
  {
    id: 1,
    icon: <MdDesignServices />,
    title: "UI & UX design",
    description:
      "I have acquired comprehensive skills in UI/UX design, specifically utilizing industry-standard tools such as Figma and Adobe XD. My expertise in these platforms allows me to create captivating and user-friendly designs that effectively cater to clients' needs.",
  },
  {
    id: 2,
    icon: <MdDeveloperMode />,
    title: "Website",
    description:
      "I specialize in visually captivating websites, with expertise in front-end and medium-level back-end development. Using modern technologies, I craft responsive interfaces for seamless user experiences. From engaging front-end designs to dynamic back-end functionalities, I deliver high-quality websites that exceed expectations.",
  },
  {
    id: 3,
    icon: <MdCastForEducation />,
    title: "Education",
    description:
      "In my educational journey, I have specialized as a mentor for HTML, CSS, and JavaScript (front-end development), along with React and Next.js. I am passionate about guiding and empowering aspiring developers to gain proficiency in these technologies. Through my mentorship, I strive to create an engaging and supportive learning environment, enabling students to build strong foundations and excel in their web development skills.",
  },
];

const skills = [
  { id: 1, icon: <FaHtml5 />, title: "HTML 5" },
  { id: 2, icon: <FaCss3 />, title: "CSS 3" },
  { id: 3, icon: <SiJavascript />, title: "Javascript" },
  { id: 4, icon: <FaReact />, title: "React" },
  { id: 5, icon: <AiFillApi />, title: "Restful API" },
  { id: 6, icon: <BsFillBootstrapFill />, title: "Bootstrap" },
  { id: 7, icon: <SiMui />, title: "Mui" },
  { id: 8, icon: <SiChakraui />, title: "Chakra ui" },
  { id: 9, icon: <SiAntdesign />, title: "Ant design" },
  { id: 10, icon: <AiFillGithub />, title: "Git" },
  { id: 11, icon: <SiMongodb />, title: "MongoDB" },
  { id: 12, icon: <SiNodedotjs />, title: "NodeJs" },
];

const designSkill = [
  { id: 13, icon: <SiFigma />, title: "Figma" },
  { id: 14, icon: <SiAdobexd />, title: "Adobe XD" },
  { id: 15, icon: <BsTrello />, title: "Trello" },
  { id: 16, icon: <SiJirasoftware />, title: "Jira" },
  { id: 17, icon: <SiAdobephotoshop />, title: "Photoshop" },
  { id: 18, icon: <BsWordpress />, title: "Word press" },
];

const experiences = [
  {
    id: 1,
    jobTitle: "Droplinked",
    year: "March 2023 – May 2023",
    place: "Berlin, Germany",
    technologies: [
      "Web3",
      "Restful Api",
      "Swagger",
      "Typescript",
      "Git",
      "Redux",
      "Chakra ui",
      "ReactJs",
    ],
    description:
      "During my time at Droplinked, I worked with these technologies and contributed to the development of a web application with a two-sided feature. It included a creator section for creating new shops and a shop section for customers to browse and purchase products. The application also featured rule sets for certain products, including gating and discount rules.",
  },
  {
    id: 2,
    jobTitle: "Arman Pajouhan in science & technology park",
    year: "June 2021 – December 2021",
    place: "Sari, Mazandaran, Iran",
    technologies: [
      "Restful API,",
      "ReactJS,",
      "Redux,",
      "Git",
      "Adobe XD,",
      "Photoshop",
      "Bootstrap",
    ],
    description:
      "At Arman Pajouhan, I was involved in implementing online shops, exploring different delivery methods, creating SVGs for websites, and developing various admin panels that included budget tracking and various chart visualizations.",
  },
  {
    id: 3,
    jobTitle: "String Studio",
    year: "November 2020 - january 2021",
    place: "Golestan, Gorgan",
    technologies: ["Wordpress", "Elementor", "SEO", "Yoast SEO"],
    description:
      "While working as an intern for String Studio remotely, I gained valuable experience in SEO, Wordpress, and Elementor. During my time there, I had the opportunity to use Yoast SEO to optimize blogs for search engines and also create themes using Elementor.",
  },
  {
    id: 4,
    jobTitle: "Sepehr academy",
    year: "May 2020 – October 2020",
    place: "Sari, Mazandaran, Iran",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Ajax",
      "Mvc.Net",
      "Jquery",
    ],
    description:
      "During my internship at Sepehr Academy, I deployed websites, gained experience in front end development, and implemented various pages for the Digistyle website.",
  },
];

export { socialMediaData, abilities, skills, designSkill, experiences };
