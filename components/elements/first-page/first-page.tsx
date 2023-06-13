"use client";
/* eslint-disable react/no-unescaped-entities */
import styles from "./first-page.module.css";

import Typewriter from "typewriter-effect";
import Slider from "./parts/slider";

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
              strings: [
                "Experienced in creating visually appealing interfaces as a Front-end developer and UI/UX design enthusiast, with a medium foundation in backend development.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        <div className={styles.photo}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
