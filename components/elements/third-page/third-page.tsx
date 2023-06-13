import Experience from "./parts/Experience";
import styles from "./third-page.module.css";

const experiences = [
  {
    id: 1,
    jobTitle: "Droplinked",
    year: "March 2023 – May 2023",
    place: "Berlin, Germany",
    technologies: [
      "Web3",
      "Restful Api",
      "Swagger",
      "Typescript",
      "Git",
      "Redux",
      "Chakra ui",
      "ReactJs",
    ],
    description:
      "During my time at Droplinked, I worked with these technologies and contributed to the development of a web application with a two-sided feature. It included a creator section for creating new shops and a shop section for customers to browse and purchase products. The application also featured rule sets for certain products, including gating and discount rules.",
  },
  {
    id: 2,
    jobTitle: "Arman Pajouhan in science & technology park",
    year: "June 2021 – December 2021",
    place: "Sari, Mazandaran, Iran",
    technologies: [
      "Restful API,",
      "ReactJS,",
      "Redux,",
      "Git",
      "Adobe XD,",
      "Photoshop",
      "Bootstrap",
    ],
    description:
      "At Arman Pajouhan, I was involved in implementing online shops, exploring different delivery methods, creating SVGs for websites, and developing various admin panels that included budget tracking and various chart visualizations.",
  },
  {
    id: 3,
    jobTitle: "String Studio",
    year: "November 2020 - january 2021",
    place: "Golestan, Gorgan",
    technologies: ["Wordpress", "Elementor", "SEO", "Yoast SEO"],
    description:
      "While working as an intern for String Studio remotely, I gained valuable experience in SEO, Wordpress, and Elementor. During my time there, I had the opportunity to use Yoast SEO to optimize blogs for search engines and also create themes using Elementor.",
  },
  {
    id: 4,
    jobTitle: "Sepehr academy",
    year: "May 2020 – October 2020",
    place: "Sari, Mazandaran, Iran",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Ajax",
      "Mvc.Net",
      "Jquery",
    ],
    description:
      "During my internship at Sepehr Academy, I deployed websites, gained experience in front end development, and implemented various pages for the Digistyle website.",
  },
];

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
