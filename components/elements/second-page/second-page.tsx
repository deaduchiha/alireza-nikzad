"use client";

import Card from "./parts/ability-card/card";
import styles from "./second-page.module.css";
import Skill from "./parts/skill/skill";

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

const SecondPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What i do?</h2>
      <div className={styles.ability}>
        {abilities.map((ability) => (
          <Card
            key={ability.id}
            icon={ability.icon}
            title={ability.title}
            description={ability.description}
          />
        ))}
      </div>

      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill.id} icon={skill.icon} title={skill.title} />
        ))}
      </div>
      <br />
      <br />
      <hr style={{ width: "100%" }} />

      <div className={styles.skills}>
        {designSkill.map((skill) => (
          <Skill key={skill.id} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default SecondPage;
