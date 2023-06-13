/* eslint-disable react/no-unescaped-entities */

import styles from "./first-page.module.css";
import Typewriter from "typewriter-effect";
import Slider from "./parts/slider";

import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";

const data = [
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

const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.biography__container}>
        <div className={styles.biography}>
          <p>
            I'm <b>Alireza Nikzad</b>
          </p>

          <Typewriter
            component="p"
            options={{
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Experienced in creating visually appealing interfaces as a Front-end developer and UI/UX design enthusiast, with a medium foundation in backend development."
                )
                .start();
            }}
          />
        </div>
        <div className={styles.photo}>
          <Slider />
        </div>
      </div>

      <div className={`${styles["social-media"]}`}>
        <div className={styles.icons}>
          {data.map((social) => (
            <a key={social.name} href={social.url} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
        <a className={styles.email} href="mailto:example@example.com">
          alireza.nikzdd@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
