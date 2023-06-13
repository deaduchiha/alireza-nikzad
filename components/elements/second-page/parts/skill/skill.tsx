import { ReactNode } from "react";
import styles from "./skill.module.css";

type SkillProps = {
  icon: ReactNode;
  title: string;
};

const Skill = ({ icon, title }: SkillProps) => {
  return (
    <div className={styles.skill}>
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default Skill;
