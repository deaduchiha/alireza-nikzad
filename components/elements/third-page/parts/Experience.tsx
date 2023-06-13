import styles from "./Experience.module.css";

interface Experience {
  jobTitle: string;
  year: string;
  place: string;
  technologies: string[];
  description: string;
}

const Experience = ({
  jobTitle,
  year,
  place,
  technologies,
  description,
}: Experience) => {
  return (
    <div className={styles.experience}>
      <h2>{jobTitle}</h2>
      <div className={styles.time}>
        <span>{year}</span>
        <span>{place}</span>
      </div>
      <ul>
        {technologies.map((technology: string, index: number) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Experience;
