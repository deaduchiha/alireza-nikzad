import { experiences } from "@/data/data";
import Experience from "./parts/Experience";
import styles from "./third-page.module.css";

const ThirdPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.experience}>
        {experiences.map((experience) => (
          <Experience
            key={experience.id}
            jobTitle={experience.jobTitle}
            year={experience.year}
            place={experience.place}
            technologies={experience.technologies}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
