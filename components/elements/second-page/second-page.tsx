import Card from "./parts/card";
import styles from "./second-page.module.css";

import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

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
    </div>
  );
};

export default SecondPage;
