import Card from "./parts/ability-card/card";
import styles from "./second-page.module.css";
import Skill from "./parts/skill/skill";
import { motion } from "framer-motion";
import { abilities, designSkill, skills } from "@/data/data";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

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
      <motion.div
        className={styles.skills}
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <Skill key={skill.id} icon={skill.icon} title={skill.title} />
        ))}
      </motion.div>
      <br />
      <br />
      <hr style={{ width: "100%" }} />

      <motion.div
        className={styles.skills}
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {designSkill.map((skill) => (
          <Skill key={skill.id} icon={skill.icon} title={skill.title} />
        ))}
      </motion.div>
    </div>
  );
};

export default SecondPage;
