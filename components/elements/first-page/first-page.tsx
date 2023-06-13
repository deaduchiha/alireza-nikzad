"use client";
/* eslint-disable react/no-unescaped-entities */
import styles from "./first-page.module.css";

import Typewriter from "typewriter-effect";
import Slider from "./parts/slider";

const FirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.biography}>
        <p>
          I'm <b>Alireza Nikzad</b>
        </p>

        <Typewriter
          component="p"
          options={{
            strings: ["Front-end-developer, UI & UX designer and student"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className={styles.photo}>
        <Slider />
      </div>
    </div>
  );
};

export default FirstPage;
