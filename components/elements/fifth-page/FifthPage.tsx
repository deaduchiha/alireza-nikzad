import styles from "./fifth-page.module.css";
import { data } from "./data";

const FifthPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      {data.map((data) => (
        <div key={data.id} className={styles.projectHolder}>
          <h3>{data.project}</h3>
          <p>{data.description}</p>
          <div className={styles.tools}>
            {data.tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FifthPage;
