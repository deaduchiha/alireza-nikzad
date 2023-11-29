import { ReactNode } from "react";
import styles from "./skill.module.css";
import { motion } from "framer-motion";

type SkillProps = {
  icon: ReactNode;
  title: string;
};

const Skill = ({ icon, title }: SkillProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className={styles.skill} variants={item}>
      {icon}
      <span>{title}</span>
    </motion.div>
  );
};

export default Skill;
