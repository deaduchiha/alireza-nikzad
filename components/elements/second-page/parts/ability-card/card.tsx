import { ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className={`${styles["card__container"]}`}>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
