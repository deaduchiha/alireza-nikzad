import styles from "./fourth-page.module.css";
import ContactForm from "./parts/ContactForm";

const FourthPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact with me</h2>
      <ContactForm />
    </div>
  );
};

export default FourthPage;
